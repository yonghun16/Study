from pathlib import Path

import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 용도
# 데이터 불러오기
# 데이터 가공(변환)

# CSV 파일 불러오기
df = pd.read_csv(DATA_DIR / "cafe_orders.csv")
# print(df.head())

# 2. 데이터 구조 확인
# print(df.shape)
# print(df.columns)
# print(df.info())
# print(df.describe())

# 3. 결측치 찾기
# print(df.isnull())
# print(df.isnull().sum())

# 4. 나이 결측치 평균으로 채우기
df["age"] = df["age"].fillna(df["age"].mean())

# 5. 리뷰 점수 결측치 채우기
df["review_score"] = df["review_score"].fillna(df["review_score"].median())

# 6. 날짜 타입 변환
df["order_date"] = pd.to_datetime(df["order_date"])
# print(df.info())

# 7. 가장 많이 팔린 메뉴 찾기
# print(df["menu"].value_counts())
# print(df["menu"].value_counts().head(1))

# 8. 매장별 총매출
# print(df.groupby("store")["total_price"].sum())

# 9. 날씨별 매출 비교
# print(df.groupby("weather")["total_price"].sum())

# 10. 회원/비회원 평균 구매 금액 비교
# print(df.groupby("member_yn")["total_price"].mean())

# 11. 카테고리별 판매량
print(df.groupby("category")["quantity"].sum())
