gameWord = "apocalypse"
guessedLetters = ['a', 'e']  #추측 문자를 저장할 리스트
maskChar = "_"

#빈 문자열로 시작하기
displayWord = ""

#1자씩 루프하기
for letter in gameWord:
    #추측한 문자가 맞는지?
    if letter in guessedLetters:
        #맞힌 문자이므로 출력할 문자열에 추가하기
        displayWord += letter
    else:
        #틀린 문자이므로 숨기기
        displayWord += maskChar

#결과 단어 출력하기
print("원래 단어: ", gameWord)
print("마스킹한 단어: ", displayWord)
