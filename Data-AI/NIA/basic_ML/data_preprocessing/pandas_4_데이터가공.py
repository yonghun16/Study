from pathlib import Path

import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

df_titanic = pd.read_csv(DATA_DIR / "titanic.csv")

# print(df_titanic.head())
# print(df_titanic.info())
# print(df_titanic.isna().sum())

# 새 열 추가
# df_titanic["만나이"] = df_titanic["Age"] - 1

# 열 삭제
# df_titanic.drop(["Age"], axis=1, inplace=True)

# 결측치 해결법
# 1. 열 삭제df.drop
# 2. 열 삭제df.dropna
# 3. 임의의 값으로 채우기 df.fillna
# > 평균, 고정된 문자(알수없음), 이전값
# 4. 예측해서 채워넣기

# 나이 평균값으로 결측치 채우기
# df_titanic["Age"] = df_titanic["Age"].fillna(df_titanic["Age"].mean())

# 1. 열 삭제
df_titanic = df_titanic.drop(
    columns=["PassengerId", "Lname", "Name", "Ticket"]
)

# 2. SibSp + Parch = Family 열 생성
df_titanic["Family"] = df_titanic["SibSp"] + df_titanic["Parch"]

# 3. Age 결측치를 평균값으로 대체
df_titanic["Age"] = df_titanic["Age"].fillna(df_titanic["Age"].mean())

# 4. Cabin 결측치를 "X"로 대체
df_titanic["Cabin"] = df_titanic["Cabin"].fillna("X")

# 5. Embarked 결측치가 있는 행 삭제
df_titanic = df_titanic.dropna(subset=["Embarked"])

# 6. Cabin의 첫 글자만 추출해서 Cabin2 열 생성
df_titanic["Cabin2"] = df_titanic["Cabin"].str[0]

# 결과 확인
print(df_titanic.head())
print(df_titanic.info())
