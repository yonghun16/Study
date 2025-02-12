'''----------------------------------------------------
Sub  : [BOJ] 최소, 최대
Link : https://www.acmicpc.net/problem/10818
Level: 브론즈 3
Tag  : Python, 
Memo
----------------------------------------------------'''

import sys
input = sys.stdin.readline

# 입력
n = int(input().rstrip())
arr_list = list(map(int, input().rstrip().split()))

max_num = arr_list[0]
min_num = arr_list[0]

for num in arr_list:
    max_num = num if num > max_num else max_num
    min_num = num if num < min_num else min_num

print(min_num, max_num)
