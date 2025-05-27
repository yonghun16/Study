# 6-3
# 선을 반복해서 그리는 프로그램

import turtle as t

angle = 89
t.bgcolor("black")
t.color("yellow")
t.speed(0)            # 거북이 최대속도

for x in range(200):
    t.forward(x)
    t.left(angle)