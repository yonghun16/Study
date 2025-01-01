# 선택정렬

n = int(input())
data = [int(w) for w in input().split()]

for i in range(len(data)-1):
    for j in range(i+1, len(data)):
        if data[i] > data[j]:
            data[i], data[j] = data[j], data[i]

print(' '.join([str(w) for w in data]))
