# 2F 데스티니

import math

# 별의 x,y 좌표 클래스
class StarXY:
    def __init__(self, x, y):
        self.x = x
        self.y = y

# 좌표를 저장할 리스트
star: list[StarXY] = []

# 두 별의 거리를 구하는 함수
def getStarDistance(fromStar, toStar):
    deltaX = fromStar.x - toStar.x
    deltaY = fromStar.y - toStar.y
    return math.sqrt(deltaX**2 + deltaY**2)

min_star_distance = 9999999999  # 가장 가까운 두 별의 거리
min_star_count = 0              # 최단거리만큼 떨어진 전체 별의 쌍의 수

# 입력
n = int(input())
for i in range(n):
    x, y = map(int, input().split())
    star.append(StarXY(x, y))

# 처리
for i in range(1, n):
    for j in range(0, i):
        current_star_distance = getStarDistance(star[i], star[j]) 
        if min_star_distance > current_star_distance:
            min_star_distance = current_star_distance
            min_star_count = 1
        elif min_star_distance == current_star_distance:
            min_star_count += 1

# 출력
print(round(min_star_distance, 1))
print(min_star_count)
