### JavaScript에서 변수가 선언, 초기화, 할당되는 과정을 메모리 관점에서 알아보기

#### 1. 변수 선언 (Declaration)
```js
var x;
let y;
const z;

```
- Hoisting 발생
  - var 선언된 변수는 undefined로 초기화되며, 선언이 코드의 최상단으로 끌어올려진다. 
  - let, const도 호이스팅되지만, 초기화되지 않은 상태로 남아 TDZ에 놓인다.
- 메모리 관점
  - var : undefined로 초기화된 상태로 메모리에 저장됨.
  - let, const : 메모리에 할당되지만, 초기화되지 않아 아직 접근 불가(TDZ 상태).


#### 2. 변수 초기화 (Initialization)
```js
var x; // 초기화됨 (undefined)
let y; // 초기화됨 (하지만 값 할당 전)
const z; // (❌ Error: 반드시 선언과 동시에 할당 필요)
```
- var는 선언과 동시에 undefined로 초기화됨.
- let도 초기화되지만, 초기값을 할당하지 않으면 undefined조차 들어가지 않는다.
- const는 선언과 동시에 값을 할당해야 하므로 위 코드는 오류 발생.
- 메모리 관점:
  - var x → undefined가 저장됨.
  - let y → TDZ에서 빠져나왔지만, 값은 아직 없음.
  - const z → 초기화 자체가 불가능하여 에러 발생.


#### 3. 변수 할당 (Assignment)
```js
x = 10;
y = 20;
z = 30; // (❌ Error: const는 선언과 동시에 초기화 필요
```
- 값을 할당하는 과정에서 메모리 변경이 발생함.
- var와 let은 변경 가능하지만, const는 한 번만 할당 가능하다.
- 메모리 관점:
  - x(var): 기존 undefined 값이 10으로 변경됨.
  - y(let): 값이 20으로 업데이트됨.
  - z(const): 할당이 늦었기 때문에 에러 발생.
