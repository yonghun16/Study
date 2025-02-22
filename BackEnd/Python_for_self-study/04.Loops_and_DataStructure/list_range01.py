# ----------------
# 리스트와 범위를 조합해서 사용하기
# ----------------

#리스트를 선언합니다.
array = [273, 32, 103, 57, 52]

#리스트에 반복문을 적용합니다.
for i in range(len(array)):
    #출력합니다.
    print("{}번째 반복: {}".format(i, array[i]))
print()

#리스트에 반복문을 적용합니다2. (feat 거꾸로)
for i in array[::-1]:
    #출력합니다.
    print("{}".format(i))
print()

#리스트에 반복문을 적용합니다3. (feat 거꾸로)
for i in reversed(array):
    #출력합니다.
    print("{}".format(i))
print()
