'''----------------------------------------------------
Sub  : [BOJ] 나는 요리사다
Link : https://www.acmicpc.net/problem/2953
Level: 브론즈 3
Tag  : Python,
Memo
----------------------------------------------------'''

import sys
input = sys.stdin.readline

# 입력
arr_list = [ list(map(int, input().rstrip().split())) for _ in range(5) ]

participant = 0
max_score = 0
max_participant = 0

for score in arr_list:
    participant += 1
    sum_score = sum(score)
    if max_score < sum_score :
        max_score = sum_score
        max_participant = participant

# 출력
print(max_participant, max_score)
