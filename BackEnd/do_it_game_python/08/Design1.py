#문자 추측하기
currGuess = input("추측 문자: ").strip().lower()

#1자인지 확인하기
if len(currGuess) > 1:
    currGuess = currGuess[0]

#결과 출력하기
print(currGuess)
