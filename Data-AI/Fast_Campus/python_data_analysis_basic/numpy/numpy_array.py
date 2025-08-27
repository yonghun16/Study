import numpy as np

# ---------------------
#    배열 생성하기
# ---------------------

# 파이썬 리스트로 배열 만들기
a = np.array([1, 2, 3])
#print(a)

# 2차원 배열 (행렬)
b = np.array([[1, 2, 3], [4, 5, 6]])
#print(b)

# 0으로 채운 배열
zeros = np.zeros((3, 3))
#print(zeros)

# 1로 채운 배열
ones = np.ones((2, 2))
#print(ones)

# 0~9까지 연속된 정수
arr = np.arange(10)
#print(arr)

# 0~1 사이 균등 분포 난수
rand = np.random.rand(3, 3)
print(rand)
