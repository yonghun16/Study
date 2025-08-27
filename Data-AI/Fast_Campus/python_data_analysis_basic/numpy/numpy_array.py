import numpy as np

# ------------------------------------
# 배열 생성하기
# ------------------------------------

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



# ------------------------------------
# 연속된 값으로 만들기 : np.arage()
# ------------------------------------

# 0부터 9까지의 정수 배열
arr = np.arange(10)
# print(arr)



# ------------------------------------
# 특정 값으로 채우기
# ------------------------------------

# 모든 값이 0인 2x3 배열
zeros_arr = np.zeros((2, 3))
# print(zeros_arr)

# 모든 값이 1인 3x2 배열
ones_arr = np.ones((3, 2))
# print(ones_arr)

# 모든 값을 7로 채운 2x2 배열
full_arr = np.full((2, 2), 7)
# print(full_arr)

