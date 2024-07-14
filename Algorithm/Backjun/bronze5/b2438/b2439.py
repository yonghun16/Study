# 별 찍기 - 1
# https://www.acmicpc.net/problem/2438

# 별을 출력하는 함수
def printStar(n):
    for i in range(1, n+1):
        for j in range(i):
            print("*", end="")
        print()

n = int(input())

printStar(n)
