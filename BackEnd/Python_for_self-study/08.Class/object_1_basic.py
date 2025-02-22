# 학생 리스트를 선언합니다.
students = [
        { "name": "윤인성", "korean": 87, "math": 98, "english": 88, "science": 95},
        { "name": "연하진", "korean": 92, "math": 98, "english": 90, "science": 12},
        { "name": "구지연", "korean": 76, "math": 76, "english": 12, "science": 34},
        { "name": "나선주", "korean": 72, "math": 23, "english": 67, "science": 45},
        { "name": "윤아린", "korean": 87, "math": 34, "english": 98, "science": 56},
        { "name": "윤명월", "korean": 95, "math": 87, "english": 89, "science": 87}
        ]

# 학생을 한 명 씩 반복합니다.
print("이름", "총점", "평균", sep="\t")

for student in students:
    # 점수의 총합과 평균을 구합니다.
    score_sum = student["korean"] + student["math"] + student["english"] + student["science"]
    score_average = score_sum / 4
    # 출력합니다.
    print(student["name"], score_sum, score_average, sep="\t")
