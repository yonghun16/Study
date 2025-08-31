import numpy as np

# -------------------------------------------------
# 첫 번째 축은 길이가 2이고, 두 번째 축은 길이가 3
# -------------------------------------------------
a = np.array(
    [
        [1, 2, 3],
        [3, 4, 6]
    ]
)
# print(a)


# -------------------------------------------------
# 아래와 같은 데이터는 1개의 축을 가지며, 
# 축은 3가지 요소(element)를 가지고 있다. 길이(length)는 3이다.
# -------------------------------------------------
a = np.array(
    [0, 2, 1]
)
# print(a)


# -------------------------------------------------
# 배열의 대표적인 속성값 (shape, ndim, dtype, itemsize, size)
# a라는 변수에 (3, 4) 크기의 2D 배열을 생성해보자.
# -------------------------------------------------
a = np.arange(12).reshape(3, 4);

# print(a)
# print(a.shape)  # 배열의 각 축(axis)의 크기
# print(a.ndim) # 축의 개수
# print(a.dtype)  # 배열의 타입 -> int64
# print(a.itemsize)  # 각 요소(Element)의 타입의 bytes 크기
# print(a.size)  # 전체 요소의 개수


# -------------------------------------------------
# NumPy 배열 생성
# .zeros(shape), .ones(shapes), .empty(shape)
# -------------------------------------------------
a = np.array([2, 3, 4])
b = np.array([1.2, 3.4, 5.1])

# (3, 4) 크기의 배열을 생성하여 0으로 채움
# print(np.zeros((3, 4)))

# (2, 3, 4) 크기의 배열을 생성하여 1로 채움
# print(np.ones((2, 3, 4), dtype=np.int64))

# 초기화 되지않은 (2, 3) 크기의 배열을 생성
# print(np.empty((2, 3)))


# np.arange
a = np.arange(0, 10, 2)
# print(a)

a = np.arange(10, 30, 5)
# print(a)


# np.linspace
x = np.linspace(0, 99, 100)
# print(x)

# 1차원
a = np.arange(3)
# print(a)

# 2차원
a = np.arange(12).reshape(4, 3)
# print(a)

# 3차원
a = np.arange(24).reshape((2, 4, 3))
print(a)
