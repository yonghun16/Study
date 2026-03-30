"""
•	분류(Classification) → 정답이 종류/카테고리
        •	예: 스팸 / 정상 메일
        •	예: 꽃 종류 setosa / versicolor / virginica
•	회귀(Regression) → 정답이 숫자
        •	예: 집값 예측
        •	예: 시험 점수 예측
        •	예: 내일 매출 예측
        •	예: 몸무게 / 온도 / 수요량 예측
"""

from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, StandardScaler

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 데이터 불러오기
df_boston = pd.read_csv(DATA_DIR / "BostonHousing.csv")
# print(df_boston.head())

df_boston.columns = (
    df_boston.columns.str.lower()
)  # 컬럼명을 모두 소문자로 통일

# 2. y = medv(타겟), x = 나머지 열(피처)로 분할
# 보통 종속변수(y)는 스케일링을 하지 않는 것이 해석에 유리하여 X에만 스케일링을 적용합니다.
X = df_boston.drop("medv", axis=1)
y = df_boston["medv"]

# 범주형 데이터가 섞여 있을 경우를 대비해 수치형으로 강제 변환
X = X.astype(float)

# 3. 데이터를 학습용(80)과 검증용(20)으로 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 1. 4가지 스케일링 변환 준비
# 보스턴 데이터 중 'zn', 'chas' 열에는 0 값이 존재하므로 일반 log 대신 np.log1p(log(1+x))를 사용합니다.
scaling_methods = {
    "1. 스케일링 미적용": None,
    "2. 표준화 (Standardization)": StandardScaler(),
    "3. 정규화 (Min-Max Normalization)": MinMaxScaler(),
    "4. 로그 변환 (Log Transformation)": "log",
}

print("=" * 50)
print("보스턴 주택 가격 회귀 분석 (스케일링 비교)")
print("=" * 50)

# 각 스케일링 방법별로 4번, 5번 과정을 반복 수행
for name, scaler in scaling_methods.items():
    print(f"\n▶ {name}")

    # 스케일링 적용
    if scaler is None:
        X_train_scaled = X_train.copy()
        X_test_scaled = X_test.copy()
    elif scaler == "log":
        X_train_scaled = np.log1p(X_train)
        X_test_scaled = np.log1p(X_test)
    else:
        # 학습용 데이터로 fit하고 transform 한 뒤, 검증용은 transform만 수행!
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)

    # 4. 회귀 모델(다중 선형 회귀) 학습
    lr_model = LinearRegression()
    lr_model.fit(X_train_scaled, y_train)

    # 5. 결정계수(R-squared) 산출
    y_pred = lr_model.predict(X_test_scaled)
    r2 = r2_score(y_test, y_pred)

    # 5. 회귀식 및 결과 출력
    # 변수가 13개나 되므로 보기 좋게 절편과 상위 3개 변수의 계수만 예시로 조합해 보여줍니다.
    coefs = lr_model.coef_
    intercept = lr_model.intercept_

    equation = f"y = ({coefs[0]:.2f})*x1 + ({coefs[1]:.2f})*x2 + ({coefs[2]:.2f})*x3 + ({intercept:.2f})"

    print(f" - 결정계수 (R²): {r2:.4f}")
    print(f" - 회귀식 (요약): {equation}")
