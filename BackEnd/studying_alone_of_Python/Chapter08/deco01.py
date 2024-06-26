# 데코레이터를 사용한 Getter와 Setter

# 데코레이터를 사용하면 쉽게 게터와 세터를 만들 수 있다.(게터와 세터를 같은 함수명으로 사용 가능)
# 1) 변수 이름과 같은 함수를 정의하고
# 2) 위에 @property 라는 데코레이터를 붙여준다. -> getter
# 3) @변수이름.setter 라는 데코레이터를 붙여준다. -> setter


# 모듈을 가져옵니다.
import math

# 클래스를 선언합니다.
class Circle:
    def __init__(self, radius):
        self.__radius = radius
    def get_circumference(self):
        return 2 * math.pi * self.__radius
    def get_area(self):
        return math.pi * (self.__radius ** 2)

    # 게터와 세터를 선언합니다.
    @property
    def radius(self):
        return self.__radius
    @radius.setter
    def radius(self, value):
        if value <= 0:
            raise TypeError("길이는 양의 숫자여야 합니다.")
        self.__radius = value

print("<< 데코레이터를 사용한 Getter와 Setter >>")
circle = Circle(10)
print("원래 원의 반지름: ", circle.radius)

# 게터 호출
circle.radius = 2
print("변경된 원의 반지름: ", circle.radius)
print()

# 세터 호출
print("# 강제로 예외를 발생시킵니다.")
circle.radius = -10
