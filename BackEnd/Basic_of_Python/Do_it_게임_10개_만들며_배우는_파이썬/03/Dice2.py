# 불러오기
import random

# 주사위 2개 던지기
dice1 = random.randrange(1, 7)
dice2 = random.randrange(1, 7)

# 각각의 눈과 합계 출력하기
print("나온 눈은", dice1, ",", dice2, "이며 합은", dice1+dice2, "입니다.")
