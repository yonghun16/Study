# ex 14-1
# 계산 문제를 맞히는 게임

import random

def make_question():
    a = random.randint(1, 40)
    b = random.randint(1, 20)
    op = random.randint(1, 3)

    # 문자열 변수 q에 문제를 만듭니다.
    # 첫 번재 숫자를 q에 저장합니다.
    q = str(a)                   # a 값(정수)을 문자열로 바꾸어 저장합니다.
    
    # 연산자를 추가합니다.
    if op == 1:
        q = q + " + "
    if op == 2:
        q = q + " - "
    if op == 3:
        q = q + " * "
        
    # 두 번째 숫자를 q에 저장합니다.
    q = q + str(b)
    
    # 만들어진 문제를 돌려줍니다.
    return q

# 정답/오답 횟수를 저장할 변수 sc1과 sc2를 0으로 초기화합니다.
sc1 = 0
sc2 = 0

for x in range(5):
    q = make_question()
    print(q)
    ans = input("= ")
    r = int(ans)
    
    # 컴퓨터가 계산한 결과인 eval(q)의 값과 사용자가 입력한 결과(r)을 비교합니다.
    if eval(q) == r:
        print("정답!")
        sc1 = sc1 + 1
    else:
        print("오답!")
        sc2 = sc2 + 1
    
print("정답 :", sc1, "오답 :", sc2)

if sc2 == 0:
    print("당신은 천재입니다!")