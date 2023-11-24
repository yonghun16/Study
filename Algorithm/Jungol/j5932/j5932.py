# 숫자사각형 4-2
# https://www.jungol.co.kr/problem/5932

inputVal = int(input())

for i in range(0, inputVal):
    for j in range(0, inputVal):
        if (i+1)%2 != 0:
            print(j+1, end=' ')
        else:
            print(inputVal-j, end=' ')
    print()