# ex 19-2
# 주사위 실험 프로그램

import random

total = 1000000                         # 주사위를 백만 번 던집니다.
ev = 0                                  # 주사위를 던져 2가 나온 횟수를 저장할 변수

for i in range(total):                  # total 횟수만큼 반복
    if random.randint(1, 6) == 2:       # 주사위를 던져 2가 나온 경우
        ev = ev + 1                     # 2가 나온 횟수를 1 증가시킵니다.

print(ev / total)                       # 2가 나온 횟수를 전체 실험 횟수로 나누어 표시합니다.
