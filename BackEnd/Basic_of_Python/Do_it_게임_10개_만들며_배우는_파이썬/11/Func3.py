# 테두리와 함께 텍스트를 출력하는 함수
def displayWelcome(txt):
    borderChar = "*"                    # 테두리 문자 
    print(borderChar * (len(txt) + 4))  # 맨 위 줄
    print(borderChar, txt, borderChar)  # 가운데 줄
    print(borderChar * (len(txt) + 4))  # 맨 아래 줄
    
# 함수 테스트하기
displayWelcome("Welome to Coding World!")