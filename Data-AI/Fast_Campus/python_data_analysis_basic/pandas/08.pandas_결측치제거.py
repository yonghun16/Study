import numpy as np
import pandas as pd

titanic = pd.read_csv("pandas/titanic.csv")


"""
.dropna( ) == .dropna(axis=0) : 결측 값이 들어있는 행 전체 삭제
.dropna(axis=1) : 결측 값이 들어있는 열 전체 삭제
.notna( ) : 결측 값은 False 반환, 그 외에는 True 반환
"""

# .dropna(axis=0) : 결측 값이 들어있는 행 전체 삭제
titanic.dropna(axis=0).head(3)

# .dropna(axis=1) : 결측 값이 들어있는 열 전체 삭제
titanic.dropna(axis=1).head(3)
