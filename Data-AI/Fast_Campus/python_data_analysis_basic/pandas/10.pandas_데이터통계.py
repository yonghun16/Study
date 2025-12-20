import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")

"""
.mean() : 평균값
.median() : 중앙값
.describe() : 다양한 통계량 요약
.agg() : 여러개의 열에 다양한 함수를 적용
모든열에 여러 함수를 매핑 : group객체.agg([함수1, 함수2, 함수3, …])
각 열마다 다른 함수를 매핑 : group객체.agg({‘열1’: 함수1, ‘열2’: 함수2, …})
.groupby() : 그룹별 집계
.value_counts() : 값의 개수
"""

# Age 변수의 평균 구하기
titanic["Age"].mean()

# Age 변수의 중앙값 구하기
titanic["Age"].median()

# describe() 함수를 통해 다양한 통계량 요약
# 특정 변수 "Age", "Fare" 추출
titanic[["Age", "Fare"]].describe()

# agg()를 통해 여러 개의 열에 다양한 함수를 적용
# 모든 열에 여러 함수를 매핑 : group객체.agg([함수1, 함수2, 함수3,…])
# 각 열마다 다른 함수를 매핑 : group객체.agg({‘열1’: 함수1, ‘열2’: 함수2, …})
titanic.agg(
    {"Age": ["min", "max", "median", "std"], "Fare": ["min", "max", "mean", "median"]}
)

# groupby() 함수를 이용하여 그룹별 집계 <예제 1>
# groupby로 성별과 클래스로 묶어주고 나이와 요금의 평균 구하기
titanic.groupby(["Sex", "Pclass"])[["Age", "Fare"]].mean()


# groupby() 함수를 이용하여 그룹별 집계 <예제 2>
# groupby를 통해 성별을 묶은 다음, 생존율의 평균 구하기
survive = titanic.groupby("Sex")["Survived"].mean()
(survive * 100).head()


# .value_counts( ) 함수를 이용하여 개수 구하기
titanic["Pclass"].value_counts()
