from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

df = pd.read_csv(DATA_DIR / "correlation.csv")

# 수치형 열만 선택
numeric_df: pd.DataFrame = df.select_dtypes(include=["number"]).copy()

print("=== 원본 데이터 크기 ===")
print(numeric_df.shape)

# -----------------------------
# 이상치 제거 (IQR 방식)
# -----------------------------
Q1 = numeric_df.quantile(0.25)
Q3 = numeric_df.quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print("\n=== 하한(lower bound) ===")
print(lower_bound)

print("\n=== 상한(upper bound) ===")
print(upper_bound)

# 각 열별 이상치 여부
outlier_mask = (numeric_df < lower_bound) | (numeric_df > upper_bound)

print("\n=== 열별 이상치 개수 ===")
print(outlier_mask.sum())

# 이상치가 포함된 행만 보기
removed_rows = numeric_df.loc[outlier_mask.any(axis=1)]
print("\n=== 제거될 행(이상치 포함 행) ===")
print(removed_rows)

# 이상치 제거
clean_df = numeric_df.loc[~outlier_mask.any(axis=1)].copy()

print("\n=== 이상치 제거 후 데이터 크기 ===")
print(clean_df.shape)

# -----------------------------
# 상관분석
# -----------------------------
corr_matrix = clean_df.corr(method="pearson")

print("\n=== 상관계수 행렬 ===")
print(corr_matrix)

# -----------------------------
# Figure 1 : 히트맵
# -----------------------------
plt.figure("figure1", figsize=(10, 8))
sns.heatmap(
    corr_matrix, annot=True, cmap="coolwarm", fmt=".2f", linewidths=0.5
)
plt.title("Correlation Heatmap (Outliers Removed)")
plt.tight_layout()

# -----------------------------
# Figure 2 : 산점도 행렬
# -----------------------------
pair_grid = sns.pairplot(clean_df, diag_kind="hist")
pair_grid.figure.suptitle("Scatter Plot Matrix (Outliers Removed)", y=1.02)
pair_grid.figure.set_size_inches(10, 8)

manager = pair_grid.figure.canvas.manager
if manager is not None:
    manager.set_window_title("figure2")

plt.show()

# -----------------------------
# boxplot 비교
# -----------------------------
plt.figure("before_boxplot", figsize=(10, 6))
sns.boxplot(data=numeric_df)
plt.title("Before Outlier Removal")
plt.tight_layout()

plt.figure("after_boxplot", figsize=(10, 6))
sns.boxplot(data=clean_df)
plt.title("After Outlier Removal")
plt.tight_layout()

plt.show()
