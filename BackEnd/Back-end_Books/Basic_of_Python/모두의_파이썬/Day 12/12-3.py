# 12-3
# 다각형을 그리는 함수

import turtle as t

def polygon(n):
    for x in range(n):    # n번 반복합니다.
        t.forward(50)
        t.left(360/n)
        
def polygon2(n, a):
    for x in range(n):
        t.forward(a)
        t.left(360/n)
        
polygon(3)
polygon(5)


# 그림을 그리지 않고 거북이를 100만큼 이동합니다.
t.up()               # 펜을 종이에서 올린다 (그리지 않는다.)
t.forward(100)
t.down()             # 펜을 종이에 내린다 (그리기 시작한다.)

polygon2(3, 75)
polygon2(5, 100)