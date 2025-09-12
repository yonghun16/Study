import numpy as np

# a 배열 생성 및 출력
a = np.arange(10)**2
# print(a)

# a 배열의 2번째 인덱스 출력
# print(a[2])

# a 배열의 2~4번째 인덱스 출력
# print(a[2:5])

# reverse : 배열의 요소 거꾸로 출력
# print(a[::-1])

# 0~5번에서 25step 인덱스 출력
# a[0:6:2] == a[:6:2]
# a[0:6:2] = 1000
# print(a)

# ⭐️ a 배열의 index로 i를 삽입하여 출력
i = np.array([1, 1, 3, 5])
# print(a[i])

# ⭐️ j 2차원 배열 생성
# a 배열의 index로 j를 삽입하여 출력
j = np.array([[3, 4], [2, 5]])
# print(j)
# print(a[j])


# a 배열 생성 & 출력
a = np.arange(12).reshape(3, 4)
# print(a)

# b는 a>4 조건이 적용된 Boolean 값이 든 배열
b = a > 4
# print(b)

# Boolean 값이 든 b 배열을 a 배열의 index로 삽입
# True인 값들만 출력
# print(a[b])
# print(a[b].shape)

# a[b]에 해당하는 애들만 0 삽입하여 a 출력
a[b] = 0
# print(a)


# -----------------------------
# Numpy 크기변경
# -----------------------------

# a 배열 생성 & shape 출력
a = np.arange(12).reshape(3, 4)
# print(a)
# print(a.shape)

# .ravel : 모든 원소를 1차원으로 변경
# print(a.ravel())
# print(a.reshape(-1))

# .reshape : 지정한 차원으로 변경
# [3, 4] => [2, 6]로 변경
# print(a.reshape(2, 6))

# .T : [3, 4]의 전치(transpose)변환으로 [4, 3] 출력
# print(a.T)
# print(a.T.shape)

# 만약 전치 형태로 a 배열에 저장하고 싶다면! 
a = a.T
print(a)
