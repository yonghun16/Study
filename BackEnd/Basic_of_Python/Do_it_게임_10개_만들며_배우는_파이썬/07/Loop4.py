#입력 변수 초기화하기
userInput = ""

# STOP을 입력할 때까지 반복하기
while userInput != "STOP" :
    userInput = input("무언가 입력하거나 입력을 멈추려면 STOP을 입력하세요: ")\
    .upper().strip()
