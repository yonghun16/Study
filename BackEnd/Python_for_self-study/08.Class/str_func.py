# __str__() 함수
# __str__()함수를 정의만하면, str()함수를 호출할 때 __str__() 함수가 자동으로 호출된다.

#  클래스를 선언합니다.
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

    # __str__()이라는 이름으로 함수를 선언함
    def __str__(self):      
        return "{}\t{}\t{}".format(
                self.name,
                self.get_sum(),
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
    # str() 함수의 매개변수로 넣으면, __str__()가 자동 호출됨.
    print(str(student))
