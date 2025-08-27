import numpy as np

# ------------------------------------
# 연속된 값으로 만들기 : np.arage()
# ------------------------------------

# 0부터 9까지의 정수 배열
arr = np.arange(10)
 print(arr)



# ------------------------
# 특정 값으로 채우기
# ------------------------

# 모든 값이 0인 2x3 배열
zeros_arr = np.zeros((2, 3))
# print(zeros_arr)

# 모든 값이 1인 3x2 배열
ones_arr = np.ones((3, 2))
# print(ones_arr)

# 모든 값을 7로 채운 2x2 배열
full_arr = np.full((2, 2), 7)
# print(full_arr)

