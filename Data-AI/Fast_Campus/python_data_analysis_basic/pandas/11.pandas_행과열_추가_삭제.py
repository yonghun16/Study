import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")

"""
행 추가 : DataFrame.loc[‘새로운 행 이름‘] = 데이터 값
"""

# 행 추가 : DataFrame.loc[‘새로운 행 이름‘] = 데이터 값
# newRow 변수에 titanic 데이터의 0번째 행, 모든 열을 삽입(titanic.iloc[0,:])
# .loc 함수를 사용하여 891 이름을 가진 행 자리에 newRow 데이터 삽입
newRow = titanic.iloc[0, :]
titanic.loc[891] = newRow

# 열 추가 : DataFrame 객체[‘추가하려는 열 이름‘] = 데이터 값
# Pclass * 3 값을 새로운 '3Pclass' 열을 추가
titanic["3Pclass"] = titanic["Pclass"] * 3

# drop 함수를 사용하여 880번째 행부터 889번째 행까지 삭제
titanic = titanic.drop(np.arange(880, 890), axis=0)

# drop 함수를 사용하여 '3Pclass' 열 삭제
titanic = titanic.drop("3Pclass", axis=1)
print(titanic)
