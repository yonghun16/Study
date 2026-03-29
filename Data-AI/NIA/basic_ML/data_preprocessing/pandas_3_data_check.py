import pandas as pd

df = pd.read_csv("./data/simple_cafe.csv")

# 첫번째부터 5행만 출력
print(df.head())

# 아래서부터 5행만 출력
print(df.tail())

# 데이터 구조 확인
print(df.info())

# 데이터 표준화(기술통계)
print(df.describe())
