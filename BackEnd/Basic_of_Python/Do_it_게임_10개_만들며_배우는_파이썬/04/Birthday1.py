# 라이브러리 불러오기
import datetime

# 사용자 입력 얻기
year = input("태어난 해는 언제인가요? ")
year = int(year)
month = input("태어난 달은 언제인가요? ")
month = int(month)
day = input("태어난 날은 언제인가요? ")
day = int(day)

# 날짜 만들기
bday = datetime.datetime(year, month, day)

# 결과 출력하기
if bday.weekday() == 6:
    print("태어난 날은 일요일이군요.")
elif bday.weekday() == 0:
    print("태어난 날은 월요일이군요.")
elif bday.weekday() == 1:
    print("태어난 날은 화요일이군요.")
elif bday.weekday() == 2:
    print("태어난 날은 수요일이군요.")
elif bday.weekday() == 3:
    print("태어난 날은 목요일이군요.")
elif bday.weekday() == 4:
    print("태어난 날은 금요일이군요.")
elif bday.weekday() == 5:
    print("태어난 날은 토요일이군요.")
