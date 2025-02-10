# 실수형
float_number1 = 123.4567890
float_number2 = -123.4567890
print(float_number1, type(float_number1))
print(float_number2, type(float_number2))

float_number3 = 123.456e2     # e2 = 10^2
float_number4 = -123.456e-3   # e-3 = 10^-3
print(float_number3, type(float_number3))
print(float_number4, type(float_number4))

float_number5 = 123.456_789_012    #3.6 버전 이후 (가독성을 높이기 위해 사용)
print(float_number5, type(float_number5))



print()

# 유효자리 16자리까지 정확
float_number1 = 10/3
float_number2 = 1.12345678901234567890
float_number3 = 0.00012345678901234567890
float_number4 = 123.45678901234567890e5
print(float_number1, type(float_number1))
print(float_number2, type(float_number2))
print(float_number3, type(float_number3))
print(float_number4, type(float_number4))
