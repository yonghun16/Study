from pathlib import Path

import pandas as pd
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 1. 데이터 불러오기
df = pd.read_csv(DATA_DIR / "iris.csv")

# 2. 입력값(x)/정답값(y) 분리
x = df.drop("species", axis=1)
y = df.loc[:, "species"]

# 3. 학습/테스트 데이터 분리
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

# 4. 모델 생성
clf = DecisionTreeClassifier()

# 5. 모델 학습
clf.fit(x_train, y_train)

# 6. 모델 성능 평가(정확도)
y_pred = clf.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
print("정확도 :", accuracy)

# 7. 새로운 데이터 예측
new_data = pd.DataFrame(
    [[5.1, 3.5, 1.4, 0.2], [6.1, 2.5, 4.4, 1.2]], columns=x.columns
)
new_pred = clf.predict(new_data)
print("신규 예측:", new_pred)
