from pathlib import Path

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from tensorflow.keras.layers import Dense, Input  # Input 레이어 추가
from tensorflow.keras.models import Sequential
from tensorflow.keras.utils import to_categorical

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 1. 데이터 불러오기
df = pd.read_csv(DATA_DIR / "iris.csv")

# x, y 분리
x = df.drop("species", axis=1)
y = df["species"]

# 레이블 인코딩 및 원핫 인코딩
le = LabelEncoder()
y_encode = le.fit_transform(y)
y_category = to_categorical(y_encode)  # 최종 숫자 데이터: y_category

# 스케일 변환
scaler = StandardScaler()
X_scaled = scaler.fit_transform(x)  # 최종 숫자 데이터: X_scaled

# 2. 데이터 분할
x_train, x_test, y_train, y_test = train_test_split(
    X_scaled, y_category, test_size=0.2, random_state=42
)

# 3. 모델 구성
model = Sequential(
    [
        Input(shape=(4,)),  # 입력 크기 명시
        Dense(8, activation="relu"),  # 은닉층
        Dense(6, activation="relu"),
        Dense(3, activation="softmax"),  # 출력층 (클래스가 3개이므로 3)
    ]
)

# 모델 컴파일
model.compile(
    optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"]
)

# 4. 학습 (이제 x_train과 y_train은 모두 숫자 데이터입니다)
model.fit(x_train, y_train, epochs=100, batch_size=32, verbose=1)

# 정확도 평가
loss, acc = model.evaluate(x_test, y_test)
print(f"\n테스트 정확도: {acc:.4f}")
