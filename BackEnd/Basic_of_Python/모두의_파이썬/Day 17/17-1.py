# 17-1
# 터틀런 만들기

import turtle as t
import random

# 악당 거북이
te = t.Turtle()             # 악당 거북이(빨간색) 객체 생성
te.shape("turtle")          # 거북이 모양
te.color("red")
te.speed(0)
te.up()
te.goto(0, 200)

# 먹이
ts = t.Turtle()
ts.shape("circle")
ts.color("green")
ts.speed(0)
ts.up()
ts.goto(0, -200)

# 방향 변경
def turn_right():           # 오른쪽
    t.setheading(0)

def turn_up():              # 위쪽
    t.setheading(90)

def turn_left():            # 왼쪽
    t.setheading(180)

def turn_down():            # 아래쪽
    t.setheading(270)
   

# 플레이어 거북이
def play():
    t.forward(10)
    ang = te.towards(t.pos())               # 적 거북이이 플레이어 거북이를 향했을 때 각도값
    te.setheading(ang)                      # 적 거북이가 플레이어 거북이를 향하게 함.
    te.forward(9)                           # 적 거북이가 9만큼 이동
    if t.distance(ts) < 12:                 # 먹이를 먹으면 먹이 위치가 랜덤하게 재배치
        star_x = random.randint(-230, 230)
        star_y = random.randint(-230, 230)
        ts.goto(star_x, star_y)
    if t.distance(te) >= 12:                # 겹치지 않으면(게임오버) 아니면
        t.ontimer(play, 100)                # 0.1초 후 play함수를 실행합니다.(게임 계속)
        
t.setup(500, 500)
t.bgcolor("orange")
t.shape("turtle")
t.speed(0)
t.up()
t.color("white")

t.onkeypress(turn_right, "Right")
t.onkeypress(turn_up, "Up")
t.onkeypress(turn_left, "Left")
t.onkeypress(turn_down, "Down")
t.listen()
play()


# distance()는 터틀의 현재 위치에서 '특정 위치'까지 거리를 내주는 함수
# towards()는 터틀의 현재 위치에서 '특정 위치'까지 선을 그었을 때 그 각을 내주는 함수