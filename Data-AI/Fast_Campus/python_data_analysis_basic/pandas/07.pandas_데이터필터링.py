import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")
# print(titanic.head())

# 승객 데이터 추출 (Sex, Age)
passengers = titanic[["Sex", "Age"]]
# print(passengers.head())
# print()

# 조건 : 35살 초과인 데이터 추출 (True, False 반환)
# 결과값: Series (불리언 타입)
# print((passengers["Age"] >= 35).head())


# 조건 : 35살 초과인 데이터 추출
# 불리언(Boolean) 인덱싱 : 조건의 결과가 True 값인 행만 추출
# 결과값: DataFrame (데이터프레임)
above35 = passengers[passengers["Age"] >= 35]
# print(above35.head())

"""
.isin( ) : 각각의 요소가 데이터프레임 또는 시리즈에 존재하는지 파악하여 True/False 값 반환
불리언 인덱싱 + .isin( ) : 데이터의 특정 범위만 추출
"""


# .isin 함수는 각각의 요소가 데이터프레임 또는 시리즈에 존재하는지 파악하여 True/False 값 반환
# Pclass 변수의 값이 1일 경우, True/False 값 반환
pclass1 = titanic["Pclass"].isin([1])
# print(pclass1.head())


# 불리언 인덱싱 + .isin( ) : 데이터의 특정 범위만 추출
# Pclass 변수의 값이 1일 경우만 추출하여 class1 저장
class1 = titanic[titanic["Pclass"].isin([1])]
# print(class1.head())


# 불리언 인덱싱 + .isin( ) : 데이터의 특정 범위만 추출
# Age 변수의 값이 20살부터 40살까지의 범위만 추출하여 age2040 저장
age2040 = passengers[passengers["Age"].isin(np.arange(20, 41))]
# print(age2040.head())

"""
.isna( ) : 결측 값은 True 반환, 그 외에는 False 반환
.notna( ) : 결측 값은 False 반환, 그 외에는 True 반환
"""
passengers1 = passengers["Age"].isna()[0:7]
# print(passengers1)

# .notna( ) : 결측 값은 False 반환, 그 외에는 True 반환
# .notna 함수는 누락되지 않은 값을 찾기 위해 사용
# 5번째 행 False 출력
ages = passengers["Age"].notna()
# print(ages)
