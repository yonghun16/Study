# ex 6-1
# 정오각형을 그리는 프로그램

import turtle as t

n = 5
t.color("purple")
t.begin_fill()
for x in range(n):
    t.forward(50)
    t.left(360/n)
t.end_fill()