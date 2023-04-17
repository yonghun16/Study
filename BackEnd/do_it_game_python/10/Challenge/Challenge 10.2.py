#필요한 변수 선언
billAmount = 0          #계산서
tipPercent = 0.0        #팁 비율
tipAmount = 0           #팁
serviceScore = 0        #팁을 주기위한 점수
people = 0              #더치페이 인원

#계산서와 팁을 입력받음
billAmount = int(input("음식값은 얼마인가요?: "))
while serviceScore <1 or serviceScore>5 :
    serviceScore = int(input("서비스 평점은 몇 점 인가요?(1~5점): "))
while people <1 or people>20 :
    people = int(input("더치페이 할 인원은 몇명 인가요?(1~20명): "))

#서비스 평점에 따라 팁 비율을 결정
if serviceScore == 1:
    tipPercent = 10
elif serviceScore ==2:
    tipPercent = 20
elif serviceScore ==3:
    tipPercent = 30
elif serviceScore ==4:
    tipPercent = 40
elif serviceScore ==5:
    tipPercent = 50

#팁 계산
tipAmount = round((billAmount/100) * tipPercent, 0)

#지불 총액 계산
billAmount += tipAmount

#출력
print("음식값의 팁",tipAmount, "원")
print("1인당 지불할 금액은", billAmount/people, "입니다.")
