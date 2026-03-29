import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from scipy.stats import norm

# 1. data 불러오기
df = pd.read_csv("./data/titanic.csv")
# print(df.describe())

# 2. 왜도로 분포를 확인
#   양수(+) → 오른쪽 꼬리가 김 (right-skewed)
#   음수(-) → 왼쪽 꼬리가 김 (left-skewed)
# print(df["Age"].skew())

# 3. 히스토그램
# plt.hist(df["Age"].dropna(), bins=20, edgecolor="black")
# plt.show()

# 4. 정규분포 곡선
# age = df["Age"].dropna()
# x = np.linspace(age.min(), age.max(), 100)
# y = norm.pdf(x, age.mean(), age.std())
# plt.plot(x, y, linewidth=2)
# plt.show()

# 5. 상자 수염(Box plot) 차트
# df.boxplot(column=["Age"])
# plt.show()

# 6. 상자수염 여러개 띄우기 (x축 Pclass, y축 Age)
#  가설: 선실 등급이 높을수록 나이가 많은 사람이 분포하지 않을까?
sns.boxplot(x="Pclass", y="Age", data=df)
plt.show()
