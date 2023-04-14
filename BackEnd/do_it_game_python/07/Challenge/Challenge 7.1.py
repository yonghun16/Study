#빈 animals 리스트 만들기
animals = []

#입력 변수 초기화하기
userInput = " "

#사용자에게 설명문 출력하기
print("animlas 리스트를 만들어 봅시다.")
print("한 번에 하나씩 동물을 입력하세요.")
print("입력을 끝내려면 빈칸을 입력하세요.")


#빈 문자열이 될 때까지 루프
while userInput != "" :
    #입력받기
    userInput = input("동물 종류를 입력하세요. 끝내려면 빈칸으로 두세요: ").strip()
    #입력한 값이 있는지 확인하기 and 중복이 없는지 확인하기
    if len(userInput) > 0 and not userInput in animals:
        #있다면 이를 추가함
        animals.append(userInput)

#데이터 정렬하기
animals.sort()

#리스트 출력하기
for animal in animals :
    print(animal)

