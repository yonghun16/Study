list_a = []
list_b = []

for i in range(0, 6):
    list_a.append(input("Element? "))

for i in list_a[0::2]:
    list_b.append(i)

for i in list_a[1::2]:
    list_b.append(i)

print(list_b)

