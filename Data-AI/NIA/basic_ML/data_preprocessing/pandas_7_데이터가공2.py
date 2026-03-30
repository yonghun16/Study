from pathlib import Path

import pandas as pd
from sklearn.preprocessing import MinMaxScaler, StandardScaler

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

df_titanic = pd.read_csv(DATA_DIR / "titanic.csv")

# print(df_titanic.head())
# print(df_titanic.info())
# print(df_titanic.isna().sum())

# 1. 결측치 처리
#  1) 수치형 데이터: Age의 결측치를 중앙값으로 대체
df_titanic["Age"] = df_titanic["Age"].fillna(df_titanic["Age"].median())

#  2) 범주형 데이터: Embarked의 결측치를 최빈값으로 대체
df_titanic["Embarked"] = df_titanic["Embarked"].fillna(
    df_titanic["Embarked"].mode()[0]
)

#  3) 정보가 너무 없는 컬럼 삭제: Cabin 등 결측치가 과도하게 많은 경우
df_titanic.drop(columns=["Cabin"], inplace=True)
print(df_titanic.isna().sum())


# 2. 표준화 및 정규화
#  대상 수치형 데이터 선택 (예: Age, Fare)
scaling_cols = ["Age", "Fare"]

#  표준화 (Standardization)
scaler_std = StandardScaler()
df_titanic["Age_std"] = scaler_std.fit_transform(df_titanic[["Age"]])

#  정규화 (Normalization)
scaler_minmax = MinMaxScaler()
df_titanic["Fare_minmax"] = scaler_minmax.fit_transform(df_titanic[["Fare"]])


# 3. 이상치 탐지 및 필터
def remove_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1

    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR

    # 이상치를 제거한 데이터만 반환
    return df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]


df_titanic = remove_outliers(df_titanic, "Fare")


# 3. 레이블 엔코딩

# 4. 원-핫 엔코딩
