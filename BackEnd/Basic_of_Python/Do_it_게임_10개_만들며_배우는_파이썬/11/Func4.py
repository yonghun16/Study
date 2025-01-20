# 숫자 입력 함수
def inputNumber(prompt):
    # 입력 변수
    inp = ""
    # 변수가 유효한 숫자일 때까지 반복하기
    while not inp.isnumeric():
        # 입력 프롬프트
        inp = input(prompt).strip()
    # 숫자 반환하기
    return int(inp)

# 숫자 가져오기
num = inputNumber("숫자 입력: ")
# 출력하기
print(num)