'''----------------------------------------------------
Sub  : [BOJ] 요세푸스 문제
Link : https://www.acmicpc.net/problem/1158
Level: 실버 4
Tag  : Python, data structure
Memo
----------------------------------------------------'''

import sys
input = sys.stdin.readline

def josephus(N, K):
    people = list(range(1, N + 1))  # 1부터 N까지 리스트 생성
    result = []
    index = 0

    while people:
        index = (index + K - 1) % len(people)  # K번째 사람 선택
        result.append(people.pop(index))  # 제거 후 결과에 추가

    return f"<{', '.join(map(str, result))}>"

# 입력 받기
N, K = map(int, input().rstrip().split())
print(josephus(N, K))
