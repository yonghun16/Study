import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("./data/correlation.csv")
# print(df.head())


# 상관계수 분석
corr = df.loc[:, "study_hours"].corr(df.loc[:, "test_score"])
# print("상관계수", corr)

plt.scatter(df.loc[:, "study_hours"], df.loc[:, "test_score"])
plt.show()
