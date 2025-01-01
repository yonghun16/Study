from typing import List

# 선택정렬 v3

n = int(input())
data = [int(w) for w in input().split()]


def get_min_index(data: List[int], begin: int, end: int):
    index = begin  
    for i in range(begin + 1, end):
        if data[i] < data[index]:
            index = i

    return index


def selection_sort(data: List[int]):
    for i in range(len(data)-1):
        min_index = get_min_index(data, i, len(data))
        data[i], data[min_index] = data[min_index], data[i]


selection_sort(data)

print(' '.join([str(w) for w in data]))
