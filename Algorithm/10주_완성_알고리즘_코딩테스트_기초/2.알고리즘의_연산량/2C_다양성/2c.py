# 2C 다양성

n = int(input())
inputData = list(map(int, input().split(' ')))

result = 1
current = inputData[0]

for i in range(1, n):
    if current != inputData[i]:
        result += 1
        current = inputData[i]

print(result)
