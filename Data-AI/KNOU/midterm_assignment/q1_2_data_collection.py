import json

import requests

SERVICE_KEY = ""
URL = "https://apis.data.go.kr/B552845/perDay/price"

params = {
    "serviceKey": SERVICE_KEY,
    "pageNo": 1,
    "numOfRows": 200,
    "returnType": "JSON",
    "cond[exmn_ymd::GTE]": "20150101",
    "cond[exmn_ymd::LTE]": "20151231",
    "cond[se_cd::EQ]": "02",
    "cond[ctgry_cd::EQ]": "200",
    "cond[item_cd::EQ]": "211",
    "cond[grd_cd::EQ]": "04",
    "cond[sgg_cd::EQ]": "1101",
    "cond[mrkt_cd::EQ]": "0110211",
    "cond[vrty_cd::EQ]": "01",
}

# HTTP GET
response = requests.get(URL, params=params, timeout=30)
print("HTTP 상태코드:", response.status_code)

# JSON
body = response.json()["response"]["body"]
print("response.body.totalCount:", body["totalCount"], "(정상: 66건)")

# 출력
print(json.dumps(body["items"]["item"][:3], ensure_ascii=False, indent=2))
