# 모듈을 가져옵니다.
import math

# 클래스를 선언합니다.
class Circle:
    def __init__(self, radius):
        self.radius = radius
    def get_circumference(self):
        return 2 * math.pi * self.radius
    def get_area(self):
        return math.pi * (self.radius ** 2)
