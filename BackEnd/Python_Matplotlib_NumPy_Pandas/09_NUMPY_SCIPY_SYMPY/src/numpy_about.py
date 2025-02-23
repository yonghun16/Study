import numpy as np

''' scalar든 array든 실수나 복소수형으로 좀 더 간편하게 정의 할 수 있다.'''
# Numpy의 list는 동일한 type의 data만 담을 수 있다.
print(np.float64(1))                       # A scalar of floast type
print(np.array([1, 2], dtype='float'))      # 실수형 수로 구성된 수열
print(np.complex64(1))                      # 복소수 형 scalar
print(np.array([1, 2], dtype='complex'))    # 복소수형 수열
print()


''' numpy의 장점 '''
# 한 array에 속한 모든 요소들에 대해 일률적인 연산을 하기가 편하다.
x = [1, 3, 4]

x1 = [i**2 for i in x]      # core python의 list comprehension을 사용함.
print(x1)

xn = np.array(x)            # numpy ndarray로 변환
xn1 = xn**2
print(xn1)
print(xn1.astype('float'))  # 실수형으로 변환도 간편
print(type(xn1))
print()

# 등차수열을 만들기 편하다.
# Numpy 함수 ~.arrange(start, stop, step)를 사용하면 'float'로 구성된 등차수열 object도 삽가능
r = list(range(2, 9, 3))    # core python
print(r)

rn = np.arange(2, 9, 3.4)    # numpy
print(rn)
