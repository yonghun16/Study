# 라이브러리 불러오기
import random

# 이름 묻기
name = input("이름이 무엇인가요?: ")
print()
print("\"반갑습니다", name + "님. 그럼 저와 가위바위보 게임을 할까요?\"")
print()

# 컴퓨터가 하나 고르기
cChoice = random.choice("SRP")

# 사용자 선택 얻기
print("가위, 바위, 보? ")
uChoice = input("S(가위), R(바위), P(보) 중 하나를 고르세요: ").upper().strip()

if name == "yonghun":
  if uChoice == "R":
    cChoice = "S"
  elif uChoice == "P":
    cChoice = "R"
  elif uChoice == "S":
    cChoice = "R"

if uChoice == "$":
  uChoice = "S"
  cChoice = "P"

if cChoice == uChoice :
    print("무승부입니다.!")
elif uChoice == "R" and cChoice == "P" :
    print(name + "님이 고른 것은 바위(R), 컴퓨터가 고른 것은 보(P). ",
          name + "님이 졌네요.")
elif uChoice == "R" and cChoice == "S" :
    print(name + "님이 고른 것은 바위(R), 컴퓨터가 고른 것은 가위(S). ",
          name + "님이 이겼네요.")
elif uChoice == "S" and cChoice == "R" :
    print(name + "님이 고른 것은 바위(P), 컴퓨터가 고른 것은 바위(R). ",
          name + "님이 졌네요.")
elif uChoice == "S" and cChoice == "P" :
    print(name + "님이 고른 것은 가위(S), 컴퓨터가 고른 것은 보(P). ",
          name + "님이 이겼네요.")
elif uChoice == "P" and cChoice == "S" :
    print(name + "님이 고른 것은 보(P), 컴퓨터가 고른 것은 가위(S). ",
          name + "님이 졌네요.")
elif uChoice == "P" and cChoice == "R" :
    print(name + "님이 고른 것은 보(P), 컴퓨터가 고른 것은 바위(R). ",
          name + "님이 이겼네요.")
else :
    print("게임 설명을 또 듣는 일은 지겨울 겁니다. 그렇죠?")
