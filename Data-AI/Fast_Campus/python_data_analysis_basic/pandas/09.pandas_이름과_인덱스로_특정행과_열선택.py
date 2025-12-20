import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")
"""
.loc[] : 행 이름과 열 이름을 사용
.iloc[] : 행 번호와 열 번호를 사용
"""

# .loc[] : 행 이름과 열 이름을 사용
# 나이가 35세 초과인 사람의 이름과 나이 출력
name35 = titanic.loc[titanic["Age"] > 35, ["Name", "Age"]]


# .iloc[] : 행 번호와 열 번호를 사용
# 1번째행부터 3번째행까지의 0번째 열의 값을 "No name" 변경
name35.iloc[[1, 2, 3], 0] = "No name"
name35.head()
