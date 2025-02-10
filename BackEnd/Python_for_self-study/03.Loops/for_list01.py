# for를 이용한 리스트 생성
list_a = []

# 반복문을 적용합니다.
for i in range(0, 20, 2):
    list_a.append(i * i)

print(list_a)                     # [0, 4, 16, 36, 64, 100, 144, 196, 256, 324]
