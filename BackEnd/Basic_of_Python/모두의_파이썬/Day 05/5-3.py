# ex 5-3
# 1부터 10까지의 숫자의 합계를 구하는 프로그램

sum = 0

for x in range(1, 10+1):
    sum = sum + x
    print("x:", x, " sum:", sum)