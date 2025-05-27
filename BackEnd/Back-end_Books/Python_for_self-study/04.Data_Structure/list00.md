## 리스트

### 1. 리스트의 인덱싱 및 슬라이싱
- 리스트는 인덱스와 슬라이스를 사용할수 있다
```python
list1 = [1, "2", "a", "d", 5]
print(len(list1))   # 리스트의 길이

print(list1[:])     # 전체 리스트
print(list1[3])     # 앞에서 네번째 데이터, 3번 인덱스의 데이터
print(list1[-4])    # 뒤에서 네번째 데이터, 2번 인덱스의 데이터
print(list1[:2])    # 앞에서 2번째 까지
print(list1[2:])    # 앞에서 2번째 이후 부터
print(list1[2:4])   # 인덱스 2에서 부터 4 까지 부분리스트
print(list1[:-4])   # 처음부터 뒤에서 네번째 까지
print(list1[-4:])   # 마지막 네개의 데이터
print(list1[::2])   # 인덱스 2번째 원소마다 부분리스트
print(list1[2::2])  # 인덱스 2부터 2번째 원소마다 부분리스트
```
- 리스트는 가변(mutable) 객체이므로 특정 인덱스의 데이터를 변경할 수 있다.
```python
list1[1:4] = [2, 3, 4]  # 한번에 특정 구간의 데이터를 바꾸기
```


### 2. 2차원 리스트
- 2차원 리스트로 표현 할경우, x,y 좌표이 값을 읽으려면 data[y][x] 로 읽어야 한다.
```python
list2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
```


### 3. 리스트의 기본 함수
- insert(삽입할 인덱스, 삽입할 원소) : 리스트에 원소를 삽입
- append(추가할 원소) : 리스트의 마지막 위치에 원소를 추가
- remove(삭제할 원소) : 리스트에서 특정한 값을 가지는 원소를 삭제
- pop(제거할 인덱스) : 인덱스에 있는 원소를 제거 (제거된 원소를 반환 가능)
- count(검색한 원소) : 원소의 개수 구하기
- index(검색한 원소) : 원소의 인덱스 구하기
```python
list3 = [1, 2, 3, "3", 4]

list3.append(0)           # 마지막 위치에 0를 추가
list3.insert(2, 3)        # 인덱스 2의 위치에 3를 삽입
list3.remove("3")         # 원소 "3"을 제거
list3.pop(3)              # 인데스 3의 위치의 원소를 제거
a = list3.pop(3)          # 인데스 3의 위치의 원소를 제거 후, 제거한 원소를 a에 반환
list3.count(3)            # 원소 3의 개수
list3.index(3)            # 원소 3의 인덱스를 구하기
list3.index(3, 4)         # 3의 인덱스를 찾되, 검색 시작 위치를 4로 지정
list3.index(3, 2, 4)      # 3의 인덱스를 찾되, 검색 범위를 인덱스 2~4로 제한
```


### 4. 리스트의 연산자
- 리스트의 +, *연산자
- in : 특정 값이 리스트 내부에 있는지 확인
- not in : 특정 값이 리스트 내부에 없는지 확인 (없으면 True 반환)
```python
list4_1 = [1, 2, 3, 4, 5]
list4_2 = [6, 7, 8, 9, 10]

print(list4_1 + list4_2)  # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list4_1 * 3)        # [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
print(1 in list4_1)       # True
print(6 not in list_4_2)  # False
```


### 5. 리스트의 반복문
- 리스트의 반복문
```python
list5 = [1, 2, 3, 4, 5]
for i in range(len(list5)):
    print(list5[i])
```


### 6. 리스트의 유용한 함수
- copy() : 리스트 복사
- sort() : 리스트의 원소를 정렬
- clear() : 리스트 데이터 모두 지우기
- sum(리스트) : 리스트의 합
- max(리스트) : 리스트의 최대값 구하기
- min(리스트) : 리스트의 최소값 구하기
- extend(추가할 리스트) : 원래의 리스트에 새로운 리스트를 추가
- reversed(리스트) : 리스트를 뒤집기
- enumerate(리스트) : 인덱스와 원소를 표현
```python
list6 = [1, 2, 3, 4, 5]
list6_1 = list6.copy()          # 리스트 복사
list3.sort()                    # 오름차순 정렬
list3.sort(reverse=True)        # 내림차순 정렬
list3.clear()                   # 모든 값 지우기
print(sum(list6))               # 15
print(max(list6))               # 5
print(min(list6))               # 1
list6.extend([6, 5])            # 원소 6 과 5를 추가
print(list(reversed(list6)))    # [5, 4, 3, 2, 1]
print(list(enumerate(list6)))   # [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]
```


### 7. 리스트의 문자열 변환
- str(리스트) : 리스트를 문자열로 변환
- map(함수, 리스트) : 리스트의 원소들을 함수로 변환
- join(리스트) :리스트를 문자열로 변환
```python
list7 = [1, 2, 3, 4, 5]
print(list7)                       # [1, 2, 3, 4, 5]
print(str(list7))                  # [1, 2, 3, 4, 5]

def power(x):
    return x*x
list7_1 = list(map(power, list7))  
print(list7_1)                     # [1, 4, 9, 16, 25]

print(' '.join(map(str, list7)))   # 1 2 3 4 5
```


### 8. 리스트 컴프리헨션
- 리스트 컴프리헨션은 직관적으로 리스트를 생성하는 방법입니다. 
- 대괄호 "[", "]"로 감싸고 내부에 for문과 if 문을 사용하여 반복하며 조건에 만족하는 것만 리스트로 생성할 수 있습니다.
```python
list8 = [1, 2, 3, 4, 5]
print([i for i in list8 if i % 2 == 0])                   # [2, 4]  for와 if를 사용하여 짝수만 출력 

def test_function(x):
    x = str(x)+'ab'
    return x
list8_1 = [test_function(i) for i in range(5)]            # 함수를 적용하여 리스트 생성
print(list8_1)                                            # ex) ['0ab', '1ab', '2ab', '3ab', '4ab']

list8_2 = [[i,j] for i in range(2) for j in range(3)]     # for문을 2개 사용하여 2차원 리스트 생성
print(list8_2)                                            # ex) [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2]]
```


### 9. 리스트 초기화
- 리스트 초기화
```python
a = [0, 1, 2, 3, 4]
b = [5, 6, 7, 8, 9]

# 임의의 값으로 2차원 리스트(2x5) 선언하여 초기화
list9_1 = [a, b]
print(list9_1)

# append()로 2차원 리스트 초기화
list9_2 = []
list9_2.append(a)
list9_2.append(b)
print(list9_2)

# 원래의 리스트 값이 바뀔 경우
a[0] = 5
print(list9_1)
print(list9_2)

# 리스트 컴프리핸션을 사용하여 2차원 리스트 초기화 방법 1
list9_3 = [[0] * 5 for _ in range(2)]
print(list9_3)

# 리스트 컴프리핸션을 사용하여 2차원 리스트 초기화 방법 2
list9_4 = [[i] * 5 for i in range(2)]
print(list9_4)

# 리스트 컴프리핸션을 사용하여 2차원 리스트 초기화 방법 3
list9_5 = [[(i * 5) + j for j in range(5)] for i in range(2)]
print(list9_5)
```
