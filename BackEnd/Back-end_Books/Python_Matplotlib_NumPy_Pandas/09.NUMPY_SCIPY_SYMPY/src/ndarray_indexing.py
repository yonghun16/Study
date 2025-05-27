import numpy as np

# 1차원 array indexing
a = np.array([1, 2, 3, 5, 6, 7])
print(a[1])           # 2
print()


# 2차원 array indexing
A = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
    ])
print(A[1, 2])        # 7
print(A[A>9])         # [10, 11, 12]   A > 9의 데이터를 찾아내기



# 3차원 array indexing
A = np.array([
    [[1, 2, 3, 4], [5, 6, 7, 8]],
    [[9, 10, 11, 12], [13, 14, 15, 16]],
    [[17, 18, 19, 20], [21, 22, 23, 24]]
    ])
print(A[1, 1, 2])      # 15
print()
