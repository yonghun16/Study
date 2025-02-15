## 파이썬에서 입력 받는 방법


### 1. 하나를 입력 받기
  - 3
```python
num = int(input())
```

### 2. 한 줄을 입력받기
- 3 5
```python
a, b = map(int, input().split())
```

### 3. 리스트를 통해 한 줄을 입력받기
- 1 2 3 4 5 6 7 8 9
```python
arr = list(map(int, input().split()))
```

### 4. 한 줄로 문자열 변수 여려 개를 입력받기
- abc def
```python
a, b = input().split()
```

### 5. 문자열 여러 줄을 입력받기
- ABCDEF
- BCDEFA
- CDEFAB
```python
str = [input() for _ in range(3)]
```

- 한줄에 띄어쓰기 없는 정수를 받을 때,  n개의 줄을 입력 받을 지 정할 수 있음.
    - 0101
    - 1010
    - 2020
```python
str = [list(map(int, input())) for _ in range(3)]
```

### 6. 2차원 배열을 입력받기
- 한 줄에 띄어쓰기가 있는 배열을, 여려 개의 줄을 통해 입력 받을 때, 2차원 배열 형태로 저장
  - 0 1 0 1
  - 1 0 1 0
  - 2 0 2 0
```python
arr = [list(map(int, input().split())) for _ in range(4)]
```
