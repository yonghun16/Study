# import json
import matplotlib.pyplot as plt
import pandas as pd
import requests

# Basic Information
SERVICE_KEY = ""
URL = "https://apis.data.go.kr/B552845/perDay/price"

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

# "20150105" 형태의 문자열 -> datetime 변환
dates = pd.to_datetime(df["exmn_ymd"], format="%Y%m%d")

df["year"] = dates.dt.year
df["season"] = dates.dt.month.map(SEASON_BY_MONTH)

# 열 추가 결과 확인
# print(df.head(100))

# --------------------------------
# 3-1. 연도별 배추 평균 가격 선 그래프
# --------------------------------

# 학번 뒤 4자리
STUDENT_ID_LAST4 = "4372"

# API 값은 문자열이므로 숫자로 변환해야 평균을 구할 수 있다.
df["exmn_dd_prc"] = pd.to_numeric(df["exmn_dd_prc"])

yearly_mean = df.groupby("year")["exmn_dd_prc"].mean()
print("\n===== 연도별 평균 가격 =====")
print(yearly_mean.round(1))

# 한글 폰트
plt.rcParams["font.family"] = "AppleGothic"
plt.rcParams["axes.unicode_minus"] = False

title = f"연도별 배추 평균 가격 변화 - {STUDENT_ID_LAST4}"

fig, ax = plt.subplots(figsize=(8, 5))
ax.plot(yearly_mean.index, yearly_mean.values, marker="o")
ax.set_title(title)
ax.set_xlabel("연도")
ax.set_ylabel("평균 가격 (exmn_dd_prc)")
ax.set_xticks(yearly_mean.index)
ax.grid(True, alpha=0.3)

# 그래프 저장
fig.savefig(
    f"q3_1_cabbage_yearly_price_{STUDENT_ID_LAST4}.png",
    dpi=150,
    bbox_inches="tight",
)
plt.show()
