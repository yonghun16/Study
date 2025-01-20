# 도토리 키재기

n = int(input())
heights = [int(w) for w in input().split()]
months = [int(w) for w in input().split()]
m = int(input())

maxheight = -1

for i in range(n):
    if (m == months[i]):
        maxheight = heights[i]

print(maxheight)
