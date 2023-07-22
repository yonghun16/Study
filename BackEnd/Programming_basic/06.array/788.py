list_a = range(16)
list_b = []
n = int(input())

for i in range(1, 16):
    if (list_a[i]%n) == 0:
        list_b.append(list_a[i])

print(list_b)
