# ex 4-3
# 반복 기능으로 도형을 그리는 프로그램

import turtle as t

# 삼각형 그리기
for x in range(3):     # 세 번 반복합니다.
    t.forward(100)     # 거북이가 100만큼 앞 이동
    t.left(120)        # 왼쪽으로 120도 회전
    
# 사각형 그리기
for x in range(4):
    t.forward(100)
    t.left(90)
    
# 원 그리기
t.circle(50)