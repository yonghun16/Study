# 클래스 함수
# 그냥 클래스가 가진 함수.
# 일반적인 함수로 만드나 클래스 함수로 만드나 사용에는 큰 차이가 없음
# 다만 '클래스가 가진 기능'이라고 명시적으로 나타내는 것일 뿐
# @데코레이터로 작성.

# 클래스를 선언합니다.
class Student:
    # 클래스 변수
    count = 0
    students = []

    # 클래스 함수
    @classmethod
    def print_object(cls):
        print("------ 학생목록 ------")
        print("이름\t총점\t평균")
        for student in cls.students:
            print(str(student))
        print("------ ------ ------")

    # 인스턴스 함수 
    def __init__(self, name, korean, math, english, science):
        self.name = name
        self.korean = korean
        self.math = math
        self.english = english
        self.science = science
        Student.count += 1
        Student.students.append(self)

    def get_sum(self):
        return self.korean + self.math +\
                self.english + self.science

    def get_average(self):
        return self.get_sum() /4

    def __str__(self):
        return "{}\t{}\t{}".format(\
                self.name, self.get_sum(), self.get_average())

# 학생 리스트를 선언합니다.
Student("윤인성", 87, 92, 88, 95),
Student("연하진", 92, 55, 32, 95),
Student("구지연", 76, 87, 44, 93),
Student("나선주", 57, 90, 88, 95),
Student("윤아린", 87, 84, 66, 92),
Student("윤명월", 87, 98, 78, 85),

# 현재 생성된 학생을 모두출력합니다.
Student.print_object()
