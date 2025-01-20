from typing import List


def get_min_index(data: List[int], begin: int, end: int):
    index = begin  
    for i in range(begin + 1, end + 1):
        if data[i] < data[index]:
            index = i

    return index


def selection_sort(data: List[int]):
    n = len(data)
    for i in range(n - 1):
        min_index = get_min_index(data, i, n - 1)
        data[i], data[min_index] = data[min_index], data[i]


if __name__ == "__main__":
	n = int(input())
	data = [int(w) for w in input().split()]
	selection_sort(data)
	print(' '.join([str(w) for w in data]))
