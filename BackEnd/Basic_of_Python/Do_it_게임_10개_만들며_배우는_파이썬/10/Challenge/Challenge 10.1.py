import datetime

#현재 날짜 알기
today = datetime.datetime.now()

#생일 날짜 받기
print("당신의 생일은 언제 입니까? ")
yy = int(input("생일 년 : "))
mm = int(input("생일 월 : "))
dd = int(input("생일 일 : "))
birthday = datetime.datetime(yy, mm, dd)

#D-Day 계산
daysUntilBirthday = birthday - today

#D-Day 출력
print()
print("당신의 생일 남은 일수는")
print(daysUntilBirthday)
print()
