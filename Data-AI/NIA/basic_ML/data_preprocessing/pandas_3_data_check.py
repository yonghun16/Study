from pathlib import Path

import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

df = pd.read_csv(DATA_DIR / "simple_cafe.csv")

# 첫번째부터 5행만 출력
print(df.head())

# 아래서부터 5행만 출력
print(df.tail())

# 데이터 구조 확인
print(df.info())

# 데이터 표준화(기술통계)
print(df.describe())
