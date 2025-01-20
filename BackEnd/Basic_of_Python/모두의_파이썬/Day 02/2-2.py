# ex 2-2
# 거북이 그래픽으로 도형을 그리는 프로그램

import turtle as t

#삼각형 그리기
t.color("red")    # 펜 색상을 빨간색으로 바꿉니다.
t.forward(100)    # 거북이가 100픽셀 앞으로 이동
t.left(120)       # 왼쪽 120도 회전
t.forward(100)
t.left(120)
t.forward(100)
t.left(120)


# 사각형 그리기
t.forward(100)
t.color("green")
t.pensize(3)     # 펜 굵기를 3픽셀로 바꿉니다.
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)


# 원 그리기
t.forward(150)
t.color("blue")
t.pensize(5)
t.circle(50)       # 반지름이 50픽셀인 원 그리기