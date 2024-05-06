# 크기 비교 함수
# __eq__ : 같다
# __ne__ : 다르다
# __gt__ : 크다
# __ge__ : 크거나 같다
# __lt__ : 작다
# __le__ : 작거나 같다.

# 클래스를 선언합니다.
class Student:
    def __init__(self, name, korean, math, english, science):
        self.name = name
        self.korean = korean
        self.math = math
        self.english = english
        self.science = science

    def get_sum(self):
        return self.korean + self.math +\
                self.english + self.science

    def get_average(self):
        return self.get_sum() / 4

    def __str__(self):
        return "{}\t{}\t{}".format(
                self.name,
                self.get_sum(),
                self.get_average()
                )

    def __eq__(self, value):
        return self.get_sum() == value.get_sum()
    def __ne__(self, value):
        return self.get_sum() != value.get_sum()
    def __gt__(self, value):
        return self.get_sum() > value.get_sum()
    def __ge__(self, value):
        return self.get_sum() >= value.get_sum()

# 학생 리스트를 선언합니다.
students = [
        Student("윤인성", 87, 92, 88, 95),
        Student("연하진", 92, 55, 32, 95),
        Student("구지연", 76, 87, 44, 93),
        Student("나선주", 57, 90, 88, 95),
        Student("윤아린", 87, 84, 66, 92),
        Student("윤명월", 87, 98, 78, 85),
        ]

# 학생을 선언합니다.
student_a = Student("윤인성", 87, 98, 88, 95),
student_b = Student("윤인성", 92, 98, 96, 98),

# 출력합니다.
print("student_a == student_b = ", student_a == student_b)  # False
print("student_a != student_b = ", student_a != student_b)  # True
print("student_a >  student_b = ", student_a >  student_b)  # False
print("student_a >= student_b = ", student_a >= student_b)  # False
print("student_a <  student_b = ", student_a <  student_b)  # True
print("student_a <= student_b = ", student_a <= student_b)  # True
