# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean


from typing import List


def find_index(data: List[int]) -> int:
    n = len(data)
    average = sum(data) / n
    index = 0
    dis = 9999999
    for i in data:
        if dis > abs(i-average):
            dis = abs(i-average)
            index = data.index(i)
    return index


if __name__ == "__main__":
	n = int(input())
	data = [int(w) for w in input().split()]
	index = find_index(data)
	print(f"{index + 1} {data[index]}")

