# position 리스트의 변동 사항 테스트
position = []
position.append([4, 101])
position.append([5, 102])
position.append([6, 103])
position.append([7, 104])
position.append([8, 105])

print(position)             # position 전체 출력
print(position[0])          # position 첫 번째 원소 출력
print(position[0][1])       # position 첫 번째 원소안의 두 번째 원소 출력
print()

# 고전적 출력 방식 (c, java 등)
for i in range(len(position)):
    for j in range(len(position[i])):
        print(position[i][j], end=' ')
    print()
print()

# enumerate함수 사용(전달 받은 position리스트 사용) (인덱스 및 전달 받은 리스트 사용)
for i, bxy in enumerate(position):
    print(position[i][0], position[i][1])
print()

# enumerate함수 사용('인덱스'와 '원소'로 '튜플' 생성) (인덱스 안사용, 튜플 사용)
for i, bxy in enumerate(position):
    print(bxy[0], bxy[1])
print()

# 그냥 사용
for bxy in position:
    print(bxy[0], bxy[1])
