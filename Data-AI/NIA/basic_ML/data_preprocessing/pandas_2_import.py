import pandas as pd

# 열 이름 제거, 엔코딩 설정 불러오기
df = pd.read_csv("cafe_orders.csv", header=None, encoding="utf-8")
df = df.iloc[1:]  # 첫번째 행 제거
print(df.head())

# 열 이름 지정
df.columns = [
    "order_username",
    "order_date",
    "customer_name",
    "age",
    "sex",
    "menu",
    "category",
    "quantity",
    "unit_price",
    "total_price",
    "payment_method",
    "store",
    "weather",
    "member_yn",
    "review_score",
]

# 데이터 타입 숫자형으로 변환
# pandas는 header=None로 하면 헤더도 없고 모든 데이터를 문자열로 인식
df["age"] = pd.to_numeric(df["age"], errors="coerce")
df["review_score"] = pd.to_numeric(df["review_score"], errors="coerce")

df["age"] = df["age"].fillna(round(df["age"].mean(), 1))
df["review_score"] = df["review_score"].fillna(df["review_score"].median())

# 데이터 변환
df.to_csv("./data/cafe_orders_out.csv", index=False)
