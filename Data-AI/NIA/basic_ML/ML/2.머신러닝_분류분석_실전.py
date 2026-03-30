from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.tree import DecisionTreeClassifier

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

# 데이터 불러오기
df_titanic = pd.read_csv(DATA_DIR / "titanic.csv")

# 1. 열 삭제
df_titanic.drop(
    ["PassengerId", "Lname", "Name", "Ticket"],
    axis=1,
    inplace=True,
    errors="ignore",
)

# 2. Family 열 생성
df_titanic["Family"] = df_titanic["SibSp"] + df_titanic["Parch"]
df_titanic.drop(["SibSp", "Parch"], axis=1, inplace=True)

# 3. Age 결측치 -> 평균
df_titanic["Age"] = df_titanic["Age"].fillna(df_titanic["Age"].mean())

# 4. Cabin 결측치 -> 'X'
df_titanic["Cabin"] = df_titanic["Cabin"].fillna("X")

# 5. Embarked 결측치 -> 삭제
df_titanic.dropna(subset=["Embarked"], inplace=True)

# 6. Cabin -> 첫 글자만
df_titanic["Cabin"] = df_titanic["Cabin"].str[0]

# 7. 원핫 인코딩
df_titanic = pd.get_dummies(df_titanic, columns=["Sex", "Cabin", "Embarked"])

# 8. 정규화
scaler = MinMaxScaler()
cols_to_scale = ["Age", "Family", "Fare", "Pclass"]
df_titanic[cols_to_scale] = scaler.fit_transform(df_titanic[cols_to_scale])

# 9. 데이터 분할
y = df_titanic["Survived"]
X = df_titanic.drop("Survived", axis=1)

# 10. 학습/검증 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# 11. 모델 학습
dt_model = DecisionTreeClassifier(random_state=42)
dt_model.fit(X_train, y_train)

# 12. 정확도 출력
y_pred = dt_model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"모델의 정확도: {accuracy:.4f}")

# 13. 피처 중요도 추출 및 시각화

# 모델에서 피처 중요도 가져오기
importances = dt_model.feature_importances_

# 피처 이름 가져오기 (학습에 사용된 X의 컬럼명)
feature_names = X.columns

# 시각화를 위해 DataFrame으로 변환
feature_imp_df = pd.DataFrame(
    {"Feature": feature_names, "Importance": importances}
)

# 중요도 순으로 정렬 (내림차순)
feature_imp_df = feature_imp_df.sort_values(by="Importance", ascending=False)

# 시각화 (Seaborn 바차트)
plt.figure(figsize=(10, 8))  # 그래프 크기 설정
sns.barplot(
    x="Importance", y="Feature", data=feature_imp_df, palette="viridis"
)
plt.title("Titanic Decision Tree Feature Importance")  # 제목
plt.xlabel("Importance Score")  # x축 라벨
plt.ylabel("Features")  # y축 라벨
plt.tight_layout()  # 그래프 요소가 겹치지 않게 조정

# 그래프 출력
plt.show()

# (필요시) 그래프를 파일로 저장
# plt.savefig('feature_importance.png')
