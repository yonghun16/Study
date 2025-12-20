import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")

"""
.columns : 컬럼명 확인
.head() : 데이터의 상단 5개 행 출력
.tail() : 데이터의 하단 5개 행 출력
.shape : (행, 열) 크기 확인
.info() : 데이터에 대한 전반적인 정보 제공
    - 행과 열의 크기
    - 컬럼명
    - 컬럼별 결측치
    - 컬럼별 데이터 타입
.type() : 데이터 타입 확인
"""


# 데이터의 컬럼명 확인
print(titanic.columns)

# .head() : 데이터의 상단 5개 행 출력
print(titanic.head())

# .tail() : 데이터의 하단 5개 행 출력
print(titanic.tail())

# .shape :(행, 열) 크기 확인
print(titanic.shape)

# .info() :데이터에 대한 전반적인 정보 제공
print(titanic.info())

# type() : 데이터 타입 확인
print(type(titanic))
