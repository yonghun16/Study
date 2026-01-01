import numpy as np
import pandas as pd

# colab 업로드 메뉴를 통해 드라이브 업로드
# csv 파일 읽어오기
titanic = pd.read_csv("pandas/titanic.csv")

"""
열 1개 선택 = 시리즈(Series) 객체 반환
데이터프레임의 열 데이터를 1개만 선택할 때는 2가지 방식
    - 대괄호([ ]) 안에 열 이름을 따옴표(“ ”)와 함께 입력
    - 도트(.) 다음에 열 이름을 입력
"""


# 열 1개 선택 = 시리즈(Series) 객체 반환
# 대괄호([ ]) 안에 열 이름을 따옴표(“ ”)와 함께 입력
# 데이터 내용 확인
names = titanic["Name"]
names.head()
print(names.head())

# 도트(.) 다음에 열 이름을 입력
# 데이터 내용 확인
names = titanic.Name
names.head()
print(names.head())


# 데이터 타입과 크기 확인
print(type(names))
print(names.shape)


"""
열 n개 선택 = 데이터프레임(DataFrame) 객체 반환
데이터프레임의 열 데이터를 n개 선택할 때는 1가지 방식
    - 2중 대괄호([[ ]]) 안에 열 이름을 따옴표(“ ”)와 함께 입력
"""

# 열 n개 선택 = 데이터프레임(DataFrame) 객체 반환
# 2중 대괄호([[ ]]) 안에 열 이름을 따옴표(“ ”)와 함께 입력
# "sex", "age" column만 추출하여 재 구성
# 데이터 내용 확인
passengers = titanic[["Sex", "Age"]]
passengers.head()
print(passengers.head())


# 데이터 타입과 크기 확인
print(type(passengers))
print(passengers.shape)