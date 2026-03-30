"""
(프롬프트)

df_bostion 데이터프레임을 이용해서 다음 작업을 수행하는 python 코드를 작성해줘.


1. 모든 열에 대해서 다음 데이터 스케일링 변환을 각각 수행한다.
- 스케일링 미적용, 표준화, 정규화, 로그변환

2. y=medv, x=나머지열로 분할

3. 데이터를 학습용과 검증용으로 80:20으로 분할

4. 다음 알고리즘을 이용해 회귀 모델을 만들고 학습을 수행한다.
  - LinearRegression, 랜덤 포레스트, xgboost

5. mae, mse 평가 지표를 출력한다.
"""

from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from xgboost import XGBRegressor

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 데이터 불러오기
df_boston = pd.read_csv(DATA_DIR / "BostonHousing.csv")

# 2. y=medv(가격), x=나머지열로 분할
y = df_boston["medv"]
X = df_boston.drop("medv", axis=1)

# 데이터 타입 변환 (일부 컬럼이 범주형일 수 있어 수치형으로 변환)
X = X.astype(float)

# 3. 데이터를 학습용(80%)과 검증용(20%)으로 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 스케일링 방법 및 모델 정의
scalers = {
    "미적용": None,
    "표준화(Standard)": StandardScaler(),
    "정규화(MinMax)": MinMaxScaler(),
    "로그변환": "log",
}

models = {
    "LinearRegression": LinearRegression(),
    "RandomForest": RandomForestRegressor(random_state=42),
    "XGBoost": XGBRegressor(random_state=42),
}

# 결과 저장을 위한 리스트
results = []

# 4. 반복문을 이용한 학습 및 수행
for s_name, scaler in scalers.items():
    # 데이터 복제 (원본 보존)
    X_train_scaled = X_train.copy()
    X_test_scaled = X_test.copy()

    # 1. 스케일링 적용
    if s_name == "표준화(Standard)" or s_name == "정규화(MinMax)":
        X_train_scaled = scaler.fit_transform(X_train_scaled)
        X_test_scaled = scaler.transform(X_test_scaled)
    elif s_name == "로그변환":
        # 0 또는 음수값이 있을 수 있으므로 안전하게 log1p(x+1) 사용
        X_train_scaled = np.log1p(X_train_scaled)
        X_test_scaled = np.log1p(X_test_scaled)

    for m_name, model in models.items():
        # 모델 학습
        model.fit(X_train_scaled, y_train)

        # 예측
        y_pred = model.predict(X_test_scaled)

        # 5. mae, mse 평가지표 계산
        mae = mean_absolute_error(y_test, y_pred)
        mse = mean_squared_error(y_test, y_pred)

        results.append(
            {
                "Scaling": s_name,
                "Model": m_name,
                "MAE": round(mae, 4),
                "MSE": round(mse, 4),
            }
        )

# 결과 출력 (데이터프레임 형태로 보기 좋게 출력)
df_results = pd.DataFrame(results)
print(df_results.sort_values(by="MAE"))
