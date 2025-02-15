'''----------------------------------------------------
Sub  : [BOJ] 크게 만들기
Link : https://www.acmicpc.net/problem/2812
Level: 골드 3
Tag  : Python, 
Memo
 - ArrayList의 잘못된 사용 예
----------------------------------------------------'''

import sys
input = sys.stdin.readline

n, k = map(int, input().rstrip().split())
number = list(input().rstrip())

for i in range(0, len(number)):
    while number[i] > number[i-1] and k:
        k -= 1
        del number[i-1]
    number.insert(0, 'a')

answer=''
for i in range(0, len(number)-k):
    if number[i] != 'a':
        answer += number[i]

print(answer)
