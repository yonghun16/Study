# ex 6-2
# 원을 반복해서 그리는 프로그램

import turtle as t

n = 50
t.bgcolor("black")
t.color("green")
t.speed(0)             # 거북이 속도를 가장 빠르게 지정

for x in range(n):
    t.circle(80)
    t.left(360/n)