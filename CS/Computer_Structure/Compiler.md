# 컴파일러의 기본 동작 방식

## 순서
- 원시 프로그램
- 어휘 분석
- 구문 분석
- 의미 분석
- 중간코드 생성
- 코드 최적화
- 목적코드 생성
- 목적 프로그램

## 어휘분석(lexical analysis) 단계
- 어휘분석 단계에서는 원시 프로그램을 읽어 들여서 프로그램 문장을 구성하고 있는 최소단위인 어휘들을 떼어 내어 이 어휘들이 올바른지 분석하는 일은 한다.
- 어휘들이 올바르지 않으면 오류메시지가 출력, 올바른 경우에는 토큰(token) 형태로 출력됨. -> 어휘, 토큰은 의미 있는 최소의 문법적 단위를 뜻함.
- 이와 같은 일을 하는 것을 어휘분석기(lexical analyzer) 혹은 스캐너(sanner)라고 한다. 
- <code>ABC:=E*3.14+ABC/E;</code>를 예시로 들어보자
- <code>ABC</code>, <code>:=</code>, <code>E</code>, <code>*</code>, <code>3.14</code>, <code>+</code>, <code>ABC</code>, <code>/</code>, <code>E</code>, <code>;</code> 10개의 토큰으로 분리되며, 출력된다.

## 구문분석(syntax analysis) 단계 
- 구문분석 혹은 파싱(parsing)이라고도 하며, 어휘분석 단계의 결과인 토큰들을 입력으로 받아, 이 토큰들의 열이 올바른 문장구조를 갖고 있는지 검사한다. 
- 문장구조를 정의한 문법이 필요함. 
- 올바른 문장에 대해서는 그 문장에 대한 구문구조(syntactic structure)를 만들어 출력, 올바르지 않는 문장에 대해서는 오류 메세지 출력함.
- 여기에서 구문구조는 토큰들을 단말노드(terminal node)로 하는 트리(tree)g여태로 표현되는데, 이 트리를 파스트리(parse tree)라고 함.
- 일반적으로 파스트리는 불필요한 정보인 식별자, 숫자, 식 등이 있어서 기억공간을 낭비하고 컴파일러의 속도를 떨어트림. 
- 따라서 불필요한 정보를 제거하고 다음 단계에서 꼭 필요한 정보만으로 구성된 트리를 만들 수 있는데 이를 AST(abstract syntax tree)라고 함.
```text
         :=
       /    \
     ABC      +
           /    \
         *       /
        / \     / \
       E  3.14 ABC  E
```

## 의미분석(semantic analysis) 단계
- 구문분석 단계의 결과인 구문트리가 어떠한 의미가 있고 어떠한 기능을 하는지 분석하고, 이러한 기능이 올바르게 수행될 수 있도록 환경을 조상하는 일을함.
- 구문트리를 보며 산술식과 각 문장의 연산자 및 피연산자를 인식하고 유형검사(type checking) 등을 함.
- 예를 들면 대부분의 프로그래밍 언어에서는 실수가 배열(array)의 첨자로 사용되는 것을 허용하지 않는데, 이 때 실수일 경우 오류를 지적한다.
- 또 예를 들면 정수와 실수의 혼합형 연산을 할 때 정수를 실수를 바꿔주는 작업을 한다. 

## 중간 코드 생성(intermediate code generation) 단계
- 구문분석 단계에서 만들어진 구문트리를 이용하여 코드를 생성하거나, 
- 한 문법규칙이 reduce될 때마다 구문지시적 변환으로 이루어진다. 
  - 구문지시적 변환은 문법 규칙이 reduce될 때 그 규칙에 알맞은 코드 생성 루틴을 부름으로써 중간 코드를 생성한다.
- 위의 예시(ABC:=E*3.14+ABC/E)는 다음과 같은 중간코드 열을 얻는다.

| 중간코드                      | 의미                   |
|-------------------------------|------------------------|
| (`*`, `E`, `3.14`, `T₀`)      | `T₀ = E * 3.14`        |
| (`/`, `ABC`, `E`, `T₁`)       | `T₁ = ABC / E`         |
| (`+`, `T₀`, `T₁`, `T₂`)       | `T₂ = T₀ + T₁`         |
| (`:=`, `T₂`, `Φ`, `ABC`)      | `ABC = T₂`             |

- 여기에서 (`*`, `E`, `3.14`, `T₀`)는 E * 3.14의 연산결과를 T₀에 넣는 것을 의미함.

## 코드최적화(code optimization) 단계 
- 코드를 좀 더 효율적으로 만들어 코드 실행 시 기억공간이나 실행시간을 절약하기 위한 단계.
- 방법에 따라 지역최적화(local optimization), 전역 최적화(global optimization)로 나눌 수 있음.
  - 지역최적화 : 부분적인 관점에서 일련의 비효율적인 코드들을 구분해 내고, 좀 더 효율적인 코드로 수정하는 방법
    - eg. 중복된 명령문 제거, 불필요한 코드 제거, 제어흐름의 최적화, 식 rksthghk, 연산의 세기경감, 상수전파, 복사전파, 공통부분식 제거, 결합변형 등
  - 전역최적화 : 전체적인 관점에서 좀 더 효율적인 코드로 수정하는 방법.
    - eg. 코드이동, 귀압변수 최적화, 루프융합, 루프전개 등

## 목적 코드 생성(code generation) 단계
- 연산을 수행할 레지스터를 선택하거나 자료에 기억장소의 위치를 정해주며, 실제로 목적기계어에 대한 코드를 생성하는 단계 
- 이 과정에서는 중간코드 생성 단계에서 만들어진 중간코드들을 기계명령어로 바꾸어주는 역할을 함.


## 간단한 컴파일러 동작 예시
> ABC:=E*3.14+ABC/E;

위 코드가 아래처럼 컴파일되는 과정을 예시로 알아보자

| 번지 | 명령 또는 데이터 | 의미                  |
|------|------------------|-----------------------|
| 100  | LOAD 201         | (201) → A             |
| 101  | MULT 150         | (A) * (150) → A       |
| 102  | STORE 160        | (A) → 160             |
| 103  | LOAD 200         | (200) → A             |
| 104  | DIV 201          | (A) / (201) → A       |
| 105  | ADD 160          | (A) + (160) → A       |
| 106  | STORE 200        | (A) → 200             |
| …    | …                | …                     |
| 150  | 3.14             | 상수                  |
| …    | …                | …                     |
| 160  |                  | 작업용 번지           |
| …    | …                | …                     |
| 200  |                  | ABC의 값              |
| 201  |                  | E의 값                |
| …    | …                | …                     |

## ABC   <- 진행 상황
- 컴파일러는 입력장치를 통하여 원시 프로그램을 문자의 열(string)로 기억장치 속으로 읽어 나간다.
- 맨 처음 문자 'A'를 만난다. 'A'로 시작되는 것이 토큰의 종류 중 식별자인지? 예약어인지? 상수인지? 구분자인지? 연산자인지? 판단한다.
- 식별자의 시작인 것을 알고 'B', 'C'를 조사한 다음, ':'을 보고 'ABC'가 하나의 식별자라는 것을 판단한다.
- 이런 식별자가 나타나면 어떤 식별자들이 나왔는지 기록해 놓은 "기호표"에 기록한다.

(기호표)
| 인덱스 | 변수 | 상수 |
|:------:|:----:|:----:|
|   0    | ABC  |      |    ->  기호표의 변수열에 첫 번째 인덱스에 기록한다. 이를 토큰으로 만들어 사용한다.
|   1    |      |      |

- 토큰을 (기호표의 열, 인덱스)라하고, 열에 번호를 매겨서 '변수를 1', '상수를 2'라 한다면 위는 (1,0) 토큰으로 표시 할 수 있다.


## ABC:=  <- 진행 상황
- ':='에 대해서도 어휘분석기가 조사하여 ':='이 연산자임을 확인하면, 피연산자 스택과 연산자 스택에 각각 기록한다.

(피연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     1       |        |
|     0       | (1, 0) |    -> 피연산자 스택에 토큰(1,0)을 넣는다. 기호표에 의해 토큰(1,0)에는 'ABC'가 담겨있다.


(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     1       |        |
|     0       |   :=   |    -> 연산자 스택에 := 을 넣는다.


## ABC:=E*  <- 진행 상황
- 'E'와 '*'를 식별자롸 연산자로 구분한 다음 'E'는 기호표에 넣고 'E'와 '*'를 스택 속에 넣는다.
- 이때, :=도 대입연산자이고 *는 곱셈연산자로 같은 연산자이므로 우선순위를 판별한다.
- 만약 :=이 더 높은 우선순위 연산자라면 ABC와 E를 꺼내서(pop) 먼저 연산한 다음 그 결과를 피연산자 스택에 다시 넣는다. 
  - (이를 통해 우선순위가 낮은 연산자가 먼저 연산을 하는 결과를 예방 할 수 있다.)
- *이 := 보다 우선순위가 있으므로 그대로 넣는다. 

(기호표)
| 인덱스 | 변수 | 상수 |
|:------:|:----:|:----:|
|   0    | ABC  |      |
|   1    |  E   |      |    -> 'E'는 기호이므로 ABC 다음 인덱스에 추가한다.

(피연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |        |
|     1       | (1, 1) |    -> E
|     0       | (1, 0) |    -> ABC

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |        |
|     1       |   *    |
|     0       |   :=   |

## ABC:=E*3.14
- 다음으로 '3.14'를 검사한다. 3.14는 상수이므로 기호표의 상수 열에 저장하고, 토큰(2, 0) 형태로 변환하여 피연산자 스택에 저장함.

(기호표)
| 인덱스 | 변수 | 상수 |
|:------:|:----:|:----:|
|   0    | ABC  | 3.14 |   -> 기호표에 처음으로 상수가 들어감.(0 인덱스 배치)
|   1    |  E   |      |

(피연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     3       |        |
|     2       | (2, 0) |   -> 3,14
|     1       | (1, 1) |
|     0       | (1, 0) |

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |        |
|     1       |   *    |
|     0       |   :=   |

## ABC:=E*3.14+
- 다음으로 '+'을 검사한다. 연산자가 판별되었으므로 연산자 스택의 TOP에 있는 '*'와 우선순위를 비교한다.
- 연산자 우선순위가 +보다 *이 높으므로, 덧셈 연산을 하기 전에 *을 먼저해야 한다.
- 연산자 스택에서 *을 꺼내고, 피연산자 스택에서는 3.14(2,0)와 E(1,1)을 꺼낸다. 
- E*3.14를 연산하기 위해, 아래의 명령어를 만든다. 

| 번지 | 명령            |
|:----:|:---------------:|
| 100  | LOAD (1, 1)     |   -> 토큰(1, 1)인 E를 불러온다.
| 101  | MULT (2, 0)     |   -> 토큰(2, 0)인 3.14와 곱셈한다.

- 이 연산의 결과값은 누산기에 저장되며 누산기를 나타내는 토큰을 (30, 0)이라 한다면, 
- 스택에는 이제 (1, 1), *, (2, 0)이 없어지고 피연산자 스택에 (30, 0)이 저장된다.
- 이제 '+'는 ':='와 비교한다 +이 더 높은 우선순위를 가지므로 연산자 스택에 넣는다.


(피연산자 스택)
| 스택 인덱스 | 값      |
|:-----------:|:-------:|
|     2       |         |
|     1       | (30, 0) |   -> (30, 0)에는 우선 계산된 E*3.14의 결과값이 저장되어 있다.
|     0       | (1, 0)  |

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |        |
|     1       |   +    |
|     0       |   :=   |

## ABC:=E*3.14+ABC/E
- 이제 ABC와 /를 본다. ABC는 기호표에 이미 있으므로, ABC를 나타내는 (1, 0)을 스택에 넣는다.
- '/'는 +보다 우선순위가 높으므로 스택에 넣는다.
- 'E'와 ';'를 보고 'E'를 나타내는 (1, 1)을 스택에 넣는다. 


(피연산자 스택)
| 스택 인덱스 | 값      |
|:-----------:|:-------:|
|     3       | (1, 1)  |   -> E
|     2       | (1, 0)  |   -> ABC
|     1       | (30, 0) |   -> E*3.14
|     0       | (1, 0)  |   -> ABC

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |   /    |
|     1       |   +    |
|     0       |   :=   |

- 누산기의 사용 상태를 보면, 앞에서 만들었던 명령에 의해 E*3.14 연산결과가 누산기 (30, 0)에 저장되어 있으므로, 
- 다음 연산을 위해서는 누산기를 초기화해야 하므로 기존의 내용을 임시기억장소에 저장해야 한다.
- 임시기억장소를 작업용 번지라고하고 작업용 번지의 토큰 번호를 40이라고 가정하자
- 다음과 같은 명령어를 만든다. 

| 번지 | 명령            |
|:----:|:---------------:|
| 102  | STORE (40, 0)   |   -> 토큰(40, 0)에 누산기의 작업결과를 저장한다. 이제 명령어로 결과값을 불러올 수 있다.

- 누산기 내용은 작업용 번지 (40, 0)에 저장되었으므로 스택에서 토큰 (30, 0)을 (40, 0)으로 사용하겠다고 치환 한다.

(피연산자 스택)
| 스택 인덱스 | 값      |
|:-----------:|:-------:|
|     3       | (1, 1)  |   -> E
|     2       | (1, 0)  |   -> ABC
|     1       | (40, 0) |   -> E*3.14
|     0       | (1, 0)  |   -> ABC

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     2       |   /    |
|     1       |   +    |
|     0       |   :=   |

## 명령어 생성
- 이제 스택에서 위에서 차례로 피연산자와 기호들을 꺼내 연산을 하는 명령어를 생성해보자.

| 번지 | 명령            |
|:----:|:---------------:|
| 100  | LOAD (1, 1)     |   -> 토큰(1, 1)인 E를 불러온다.
| 101  | MULT (2, 0)     |   -> 토큰(2, 0)인 3.14와 곱셈한다.
| 102  | STORE (40, 0)   |   -> 토큰(40, 0)에 누산기의 작업결과를 저장한다. 이제 명령어로 결과값을 불러올 수 있다.

- 여기에서 시작한다. 102번지에서는 E*3.14의 계산 명령이 만들어져 있다.
- 이제 ABC/E 연산을 하기 위해 아래와 같은 명령어를 만든다.

| 번지 | 명령            |
|:----:|:---------------:|
| 103  | LOAD (1, 0)     |   -> ABC를 가져온다.
| 104  | DIV (1, 1)      |   -> ABC에 E를 나눈다. 

- 이 연산 결과는 누산기 (30, 0)에 저장된다. 이 결과를 피연산자 스택에 넣는다. 


(피연산자 스택)
| 스택 인덱스 | 값      |
|:-----------:|:-------:|
|     2       | (30, 0) |   -> ABC/E
|     1       | (40, 0) |   -> E*3.14
|     0       | (1, 0)  |   -> ABC

(연산자 스택)
| 스택 인덱스 | 값     |
|:-----------:|:------:|
|     1       |   +    |
|     0       |   :=   |

- 이제 ADD 명령을 통해 (30, 0)과 (40, 0)을 더한다.

| 번지 | 명령            |
|:----:|:---------------:|
| 105  | ADD (40, 0)     |   -> ABC/E 에다가 E*3.14를 더한다. 

- 마지막으로 이 결과를 ABC가 있는 토큰 (1, 0)에 저장한다.

| 번지 | 명령            |
|:----:|:---------------:|
| 106  | STORE (1, 0)    |

- 이렇게 만들어진 명령어들에 주소를 대입하면 아래와 같다.

| 번지 | 명령 또는 데이터 | 의미                  |
|------|------------------|-----------------------|
| 100  | LOAD 201         | (201) → A             |
| 101  | MULT 150         | (A) * (150) → A       |
| 102  | STORE 160        | (A) → 160             |
| 103  | LOAD 200         | (200) → A             |
| 104  | DIV 201          | (A) / (201) → A       |
| 105  | ADD 160          | (A) + (160) → A       |
| 106  | STORE 200        | (A) → 200             |
| …    | …                | …                     |
| 150  | 3.14             | 상수                  |
| …    | …                | …                     |
| 160  |                  | 작업용 번지           |
| …    | …                | …                     |
| 200  |                  | ABC의 값              |
| 201  |                  | E의 값                |
| …    | …                | …                     |


