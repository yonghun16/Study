import sys
input = sys.stdin.readline


# 입력 받기
A, B, V = map(int, input().strip().split())

count = int((V-A) / (A-B))
distance = count * (A-B)

while True:
    count += 1
    distance += A
    if distance >= V:
        print(count)
        break
    else:
        distance -= B
