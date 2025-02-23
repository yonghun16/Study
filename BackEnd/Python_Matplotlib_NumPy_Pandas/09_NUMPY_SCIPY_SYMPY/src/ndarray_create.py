import numpy as np

# "ndarray"는 Numpy 에서 사용되는 N-차원 array형 data object로서 같은 type의 item으로 구성된다.
# Numpy에서 다루어지는 data object의 type을 "dtype"이라고 한다.

# 1차원 array
a = np.array([1, 2, 3, 5, 6, 7], float)
print(a)           # [1 2 3 5 6 7]
print(list(a))     # [np.int64(1), np.int64(2), np.int64(3), np.int64(5), np.int64(6), np.int64(7)]
print(type(a))     # <class 'numpy.ndarray'>
print(a.dtype)     # float64
print(type(a[0]))  # <class 'numpy.float64'>
print()

# 2차원 array
B = list(
    [          # core python
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
print(B)
print()

A = np.array([[1,0,3,4], [5,6,0,8], [9,10,11,12]])
print(A)
print(A.shape)      # (3, 4) ->  (행 수, 열 수)
print(A.ndim)       # 2      ->  2차원
print(A.itemsize)   # 8      ->  한 요소의 byte 개수 (int64 = 8byte)
print(A.size)       # 12     ->  array의 전체 요소의 개수
print(A.dtype)      # int64  ->  array의 data type
print()


# 3차원 array
C = np.array([
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [25, 26, 27]]
    ])

# C = np.array(
#     [                           3차원
#         [                       2차원
#             [1, 2, 3],          1차원
#             [4, 5, 6],
#             [7, 8, 9]
#         ],
#         [
#             [10, 11, 12],
#             [13, 14, 15],
#             [16, 17, 18]
#         ],
#         [
#             [19, 20, 21],
#             [22, 23, 24],
#             [25, 26, 27]
#         ]
#     ])
print(C)
print(C.shape)      # (3, 3, 3)   
print(C.ndim)       # 3
