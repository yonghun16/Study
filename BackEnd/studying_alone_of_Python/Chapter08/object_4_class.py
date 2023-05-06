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

    def to_string(self):
        return "{}\t{}\t{}".format(\
                self.name,\
                self.get_sum(),\
                self.get_average()
                )

# 학생 리스트를 선언합니다.
students = [
        Student("윤인성", 87, 92, 88, 95),
        Student("연하진", 92, 55, 32, 95),
        Student("구지연", 76, 87, 44, 93),
        Student("나선주", 57, 90, 88, 95),
        Student("윤아린", 87, 84, 66, 92),
        Student("윤명월", 87, 98, 78, 85),
        ]

# 학생을 한 명씩 반복합니다.
print("이름", "총점", "평균", sep="\t")
for student in students:
    # 출력합니다.
    print(student.to_string())
