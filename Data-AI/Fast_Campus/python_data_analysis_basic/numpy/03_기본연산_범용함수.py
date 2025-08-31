import numpy as np

# a와 b 배열 생성하여 출력
a = np.array([20, 30, 40, 50])
b = np.arange(4)
# print(a)
# print(b)

# a에서 b에 각각의 원소를  ' - 연산 '
c = a - b
# print(c)

# b 각각의 원소에 '제곱 연산'
# print(b**2)

# a 각각의 원소에 '*10 연산'
# print(a*10)

# a 각각의 원소가 35보다 작은지 Boolean 결과
# print (a < 35)

# A * B 곱셈 연산
A = np.array( 
    [[1, 1],
     [0, 1]]
)
B = np.array( 
    [[2, 0],
     [3, 4]]
)
# print(A * B)

# A @ B 행렬 곱셈
# print(A @ B)

# a와 b 배열 생성 & 타입 확인
a = np.ones(3, dtype=np.int32)
b = np.linspace(0, np.pi, 3)
# print(a)
# print(b)
# print(a.dtype)
# print(b.dtype)

# a(int), b(float) 연산 시 float로 upcasting
c = a + b
# print(c)
# print(c.dtype)

# 0부터 8미만까지 출력하고 (2, 4) 크기로 재가공하고 제곱하여 출력
a = np.arange(8).reshape(2, 4)**2
# print(a)

# 기본 연산
# print(a.sum())  # 모든 요소의 합
# print(a.min())  # 모든 요소의 최소값
# print(a.max())  # 모든 요소 중 최댓값
# print(a.argmax())  # 최댓값 인덱스
# print(a.cumsum())  # 모든 요소의 누적합

# b 배열 생성 & 출력
b = np.arange(12).reshape(3, 4)
# print(b.sum(axis = 0))  # axis = 0 은 열 기준으로 연산
# print(b)
# print(b.sum(axis = 1))  # axis = 1 은 행 기준으로 연산

# 범용함수
B = np.array([1, 4, 9])
print(np.sqrt(B))

