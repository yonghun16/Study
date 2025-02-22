# end 속성: 마지막 문자열을 출력하고 출력할 문자 (초기 설정: 줄바꿈 문자)
# sep 속성: 여러 변수를 출력할 때, 각 값을 구분하기 위한 문자 (초기 설정: 공백 문자)

data1 = "안녕하세요"
data2 = 1
data3 = 4
data4 = 2

print(data1)
print("data2:", data2)
print(data2, data3, data4)
print(data2, data3, data4, sep=",")
print(data2, end="")
print(data3, end="")
print(data4, end="\n")
