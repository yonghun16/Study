# 9-2
# 마음대로 걷는 거북이 2

import turtle as t
import random

t.shape("turtle")
t.speed(0)

for x in range(500):
    a = random.randint(1, 360)  # 1~360도 임의의 각도
    t.setheading(a)             # 거북이 방향을 a로 설정
    b = random.randint(1, 20)   # 1~20 사이에 있는 아무 수나 골라 b에 저장
    t.forward(b)                # 10을 b로 고칩니다.