a = input()
b = a.split(" ")
print("잘못된 결과 : {}".format(b[0]+b[1]+b[2]))
print("올바른 결과 : {}".format(int(b[0])+int(b[1])+int(b[2])))
