# import json
import matplotlib.pyplot as plt
import pandas as pd
import requests

# Basic Information
SERVICE_KEY = ""
URL = "https://apis.data.go.kr/B552845/perDay/price"

STUDENT_ID_LAST4 = "4372"  # 학번 뒤 4자리

plt.rcParams["font.family"] = "AppleGothic"
plt.rcParams["axes.unicode_minus"] = False

SEASON_ORDER = ["봄", "여름", "가을", "겨울"]
SEASON_BY_MONTH = {
    3: "봄",
    4: "봄",
    5: "봄",
    6: "여름",
    7: "여름",
    8: "여름",
    9: "가을",
    10: "가을",
    11: "가을",
    12: "겨울",
    1: "겨울",
    2: "겨울",
}

# --------------------------------
# 1-2.Data Collection
# --------------------------------
params = {
    "serviceKey": SERVICE_KEY,
    "pageNo": 1,
    "numOfRows": 1000,
    "returnType": "JSON",
    "cond[exmn_ymd::GTE]": "20150101",
    "cond[exmn_ymd::LTE]": "20251231",
    "cond[se_cd::EQ]": "02",
    "cond[ctgry_cd::EQ]": "200",
    "cond[item_cd::EQ]": "211",
    "cond[grd_cd::EQ]": "04",
    "cond[sgg_cd::EQ]": "1101",
    "cond[mrkt_cd::EQ]": "0110211",
    "cond[vrty_cd::EQ]": "01",
}

response = requests.get(URL, params=params, timeout=30)
body = response.json()["response"]["body"]
# print("HTTP 상태코드:", response.status_code)
# print("response.body.totalCount:", body["totalCount"], "(정상: 66건)")
# print(json.dumps(body["items"]["item"][:3], ensure_ascii=False, indent=2))


# --------------------------------
# 2-1. JSON -> pandas DataFrame
# --------------------------------
items = body["items"]["item"]

df = pd.DataFrame(items)
# print("\n===== DataFrame 상위 5행 =====")
# print(df.head())

# print("\n===== DataFrame 기본 정보 (info) =====")
# df.info()


# --------------------------------
# 2-2. Add Year and Season
# --------------------------------

# "20150105" 형태의 문자열 -> datetime 변환
dates = pd.to_datetime(df["exmn_ymd"], format="%Y%m%d")

df["year"] = dates.dt.year
df["season"] = dates.dt.month.map(SEASON_BY_MONTH)

# 열 추가 결과 확인
# print(df.head(100))


# --------------------------------
# 3-2. 계절별 배추 평균 가격 막대 그래프
# --------------------------------
params_all = {k: v for k, v in params.items() if k != "cond[vrty_cd::EQ]"}

items_all = []
for page in range(1, 11):  # 1000건씩 최대 10페이지
    params_all["pageNo"] = page
    response = requests.get(URL, params=params_all, timeout=30)
    body = response.json()["response"]["body"]
    if not body["items"]:  # 더 받을 데이터가 없으면 중단
        break
    items_all.extend(body["items"]["item"])
print("\n수집 건수 / totalCount:", len(items_all), body["totalCount"])

df_all = pd.DataFrame(items_all)
dates_all = pd.to_datetime(df_all["exmn_ymd"], format="%Y%m%d")
df_all["season"] = dates_all.dt.month.map(SEASON_BY_MONTH)
df_all["exmn_dd_prc"] = pd.to_numeric(df_all["exmn_dd_prc"])

seasonal_mean = (
    df_all.groupby("season")["exmn_dd_prc"].mean().reindex(SEASON_ORDER)
)
print("\n===== 계절별 평균 가격 =====")
print(seasonal_mean.round(1))

fig2, ax2 = plt.subplots(figsize=(8, 5))
bars = ax2.bar(seasonal_mean.index, seasonal_mean.values)

# 각 막대 위에 구체적인 수치 표시 (천 단위 쉼표, 소수점 없음)
ax2.bar_label(bars, labels=[f"{v:,.0f}" for v in seasonal_mean], padding=3)

ax2.set_title(f"계절별 배추 평균 가격 - {STUDENT_ID_LAST4}")
ax2.set_xlabel("계절")
ax2.set_ylabel("평균 가격 (exmn_dd_prc)")
ax2.grid(axis="y", alpha=0.3)

fig2.savefig(
    f"q3_2_cabbage_seasonal_price_{STUDENT_ID_LAST4}.png",
    dpi=150,
    bbox_inches="tight",
)
plt.show()
