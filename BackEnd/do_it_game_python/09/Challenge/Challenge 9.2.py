
#라이브러리 불러오기
import random

#변수 초기화하기
maxLives = 7          #최대 허용 추측 횟수
maskChar = "_"        #마스킹 문자
livesUsed = 0         #시도 횟수
guessedLetters = []   #사용자 추측 문자를 저장할 리스트
currGuess = ""        #추측 문자 입력받는 변수

def printHangMan(livesUsed):
    if(livesUsed == 0):
        print("|---------")
        print("|/")
        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 1):
        print("|---------")
        print("|/       |")
        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 2):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 3):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|        |")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 4):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|       /|")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 5):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|       /|\\")
        print("|")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == 6):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|       /|\\")
        print("|       /")
        print("|")
        print("|")
        print("|")
        print("---")
        print()
    elif(livesUsed == "die"):
        print("|---------")
        print("|/       |")
        print("|        O")
        print("|       /|\\")
        print("|       / \\")
        print("|")
        print("|     I'm die~")
        print("|")
        print("---")
        print()
    elif(livesUsed == "alive"):
        print("|---------")
        print("|/        ")
        print("|")
        print("|")
        print("|    I'm alive!")
        print("|")
        print("|       \O/")
        print("|        |")
        print("---     / \\")
        print()


#게임 단어 리스트
gameWords = ["anvil", "boutique", "cookie", "fluff",
             "jazz", "pneumonia", "sleigh", "society",
             "topaz", "tsunami", "yummy", "zombie"]

#게임에 사용할 단어 고르기
gameWord = random.choice(gameWords)

#전체를 마스킹한 문자열로 시작하기
displayWord = maskChar * len(gameWord)


#게임 시작하기
#단어를 맞히거나 최대 횟수에 이를 때까지 루프
while (gameWord != displayWord) and (livesUsed < maxLives):
    #행맨을 화면에 표시하기
    printHangMan(livesUsed)

    #먼저 마스킹한 단어 출력하기
    print(displayWord)

    #다음으로 이미 추측한 문자 표시하기
    #보기 좋게 리스트를 문자열로 만들기
    #이미 추측한 문자가 있는지?
    if len(guessedLetters) > 0:
        #입력한 내용이 있다면 빈 문자열로 시작하기
        youTried = ""
        #추측한 각 문자 더하기
        for letter in guessedLetters:
            youTried += letter
        #출력하기
        print("시도한 문자: ", youTried)

    #남은 시도 횟수 출력하기
    print(maxLives - livesUsed, "번 남았습니다.")
    print()      #보기 좋게 빈 줄 출력하기

    #추측 문자 입력받기, 1자만 입력받기
    currGuess = input("추측 문자:").strip().lower()
    while len(currGuess) != 1:
        print("추측 문자를 길게 입력하였습니다. 1글자만 입력해주세요")
        currGuess = input("추측 문자:").strip().lower()

    currGuess = currGuess[0]

    #같은 문자 반복 추측 방지하기
    if currGuess in guessedLetters:
        print("이미 추측한 문자입니다:", currGuess)
    else:
        #'새로운 추측 문자'이므로 추측 문자 리스트에 저장하기
        guessedLetters.append(currGuess)
        #리스트 정렬하기
        guessedLetters.sort()

    #마스킹 업데이트하기
    #빈 문자열로 시작하기
    displayWord = ""
    for letter in gameWord:
        #필요한 마스킹 또는 문자 추가하기
        #추측한 문자가 맞는지?
        if letter in guessedLetters:
            #맞힌 문자이므로 출력할 문자열에 추가하기
            displayWord += letter
        else:
            #아직 맞히지 않은 문자는 마스킹하기
            displayWord += maskChar

    #올바른 추측인가요?
    if currGuess in gameWord:
        #정답이라면
        print("올바른 추측입니다.")
    else:
        #정답이 아니라면
        print("틀렸습니다.")
        livesUsed += 1      #시도 횟수 1회 늘리기
    print()


#게임을 끝내고 결과 출력하기
if displayWord == gameWord:
    #이겼다면
    printHangMan("alive")
    print("여러분이 이겼습니다. 단어는", gameWord, "입니다!")
else:
    #졌다면
    printHangMan("die")
    print("여러분이 졌습니다. 정답:", gameWord)

