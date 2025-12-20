import numpy as np
import pandas as pd

# 딕셔너리로 Series 생성
# 딕셔너리의 키는 시리지의 인덱스와 대응하고,
# 딕셔너리의 각 키에 매칭되는 값은 시리즈의 데이터 값으로 변환됨.
dict_data = {"a": 1, "b": 2, "c": 3}
series_data = pd.Series(dict_data)

# 데이터 타입, 내용 확인
print(type(series_data))
print(series_data)


# 리스트로 Series 생성
# 리스트를 시리즈로 변환할 때는 딕셔너리의 키처럼 인덱스로 변환될 값이 없음.
# 인덱스를 별도로 지정하지않으면 디폴트로 정수형 위치 인덱스가 지정됨.
list_data = ["2022-10-11", 3.14, "ABC", 100, True]
series_data = pd.Series(list_data)

# 데이터 타입, 내용 확인
print(type(series_data))
print(series_data)


# 딕셔너리로 Dataframe 생성
dict_data = {
    "c0": [1, 2, 3],
    "c1": [4, 5, 6],
    "c2": [7, 8, 9],
    "c3": [10, 11, 12],
    "c4": [13, 14, 15],
}
df = pd.DataFrame(dict_data)


# 데이터 타입, 내용 확인
# 1개의 열들이 1개의 시리즈라고 했으므로, 키값이 열 이름이 됨.
print(type(df))
print(df)


