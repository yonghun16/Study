# 9-1
# 마음대로 걷는 거북이1

import turtle as t
import random

t.shape("turtle")
t.speed(0)

for x in range(500):
    a = random.randint(1, 360)    # 1~360 임의의 수
    t.setheading(a)               # 거북이방향을 a로 변경합니다.
    t.forward(10)