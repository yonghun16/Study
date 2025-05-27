# 게터와 세터

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
    def get_radius(self):
        return self.__radius
    def set_radius(self, value):
        if value <= 0:
            raise TypeError("길이는 양의 숫자여야 합니다.")
        self.__radius = value

# 원의 둘레와 넓이를 구합니다.
circle = Circle(10)
print("# 원의 둘레와 넓이를 구합니다.")
print("원의 둘레:", circle.get_circumference())
print("원의 넓이:", circle.get_area())
print()

# 게터 사용 : 간접적으로 __radius에 접근합니다.
print("#__radius에 접근합니다.")
print(circle.get_radius())
# 게터에 의해 10 출력 (내부 변수명인 radius에 직접 값을 할당하지 않음)
print()   

# 세터 사용 : 원의 둘레와 넓이를 구합니다.
# 세터에 의해 예외 발생
circle.set_radius(-2) 
print("# 반지름을 변경하고 원의 둘레와 넓이를 구합니다.")
print("원의 둘레:", circle.get_circumference())
print("원의 넓이:", circle.get_area())
