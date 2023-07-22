list_a = range(16)
list_b = []

n = int(input())

for i in list_a:
    if (i%n) == 0:
        list_b.append(i)

list_b.remove(0)
print(list_b)
