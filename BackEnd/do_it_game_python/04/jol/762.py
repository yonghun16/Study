a = input()
b = input()

a = a.split()
b = b.split()

print("{} age + {} age = {}"\
      .format(a[0], b[0], int(a[1])+int(b[1])))

