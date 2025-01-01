# 합구하기3


n = int(input())

result = 0

for i in range(1, n+1):
    sum = 0
    for j in range(1, i+1):
        sum += j
    result += sum

print(result)
