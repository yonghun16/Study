# NumPy의 reshape는 배열의 형태(차원)를 변경하는 함수입니다. 
# 배열의 데이터를 유지하면서 새로운 형태로 재구성할 수 있습니다. 
# 즉, 배열의 총 요소 개수는 그대로 두고, 배열의 차원이나 크기를 변경할 수 있습니다.
# numpy.reshape(a, newshape)
  # a는 변형할 원본
  # newshape는 새로운 배열의 형태를 지정하는 튜플


import numpy as np

# 1D 배열
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

# 2D 배열로 reshape
reshaped_arr = arr.reshape(3, 3)
print(reshaped_arr)

# -1를 사용하여 자동 계산
arr_reshaped = arr.reshape(-1, 3)
print(arr_reshaped)
print()


# 연습 
data1 = np.array([1,2,3,4,5,6,7,8])

print(data1, data1.shape)
print()

data2 = data1.reshape(2,4)
print(data2, data2.shape)
print()

data3 = data1.reshape(4,2)
print(data3, data3.shape)
print()

data3 = data1.reshape(2,2,2)
print(data3, data3.shape)
print()

data4 = data1.reshape(-1,2)
print(data4, data4.shape)
print()

print(data4.flatten())
print(data4.reshape(-1,))
print()


# flatten 하는 방법 -> 1차원 화
data1 = np.array([[[1,2],[3,4]],[[5,6],[7,8]]])
print(data1.shape)              # 3차원 array 쉐입

data2 = data1.reshape(-1,)
print(data2, data2.shape)

data3 = data3.flatten()
print(data3, data3.shape)

