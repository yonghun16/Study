import numpy as np

list1 = [1, 2, 3, 4, 5]
arr = np.array(list1)
print(arr)

zeros = np.zeros((2, 3))
print(zeros)

ones = np.ones((3, 3))
print(ones)

arr = np.arange(12)
print(arr)

reshaped = arr.reshape(3, 4)
print(reshaped)

auto_reshaped = arr.reshape(2, -1)
print(auto_reshaped)

# 평균
average = np.average(list1)
print(average)

# 최소값
total = np.min(list1)
print(total)
