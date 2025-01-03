# 오름차순인가?

n = int(input())
data = list(map(int, input().split()))

previous = 0
result = 'YES'

for i in range(0, n-1):
    if data[i+1] < data[i]:
        result = 'NO'
        break

print(result)

