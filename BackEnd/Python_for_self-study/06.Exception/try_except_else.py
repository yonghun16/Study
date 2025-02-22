# try except else 구문으로 예외를 처리합니다.

# try : 예외가 발생할 가능성이 있는 코드
# except : 예외가 발생했을 때 실행할 코드
# else : 예외가 발생하지 않았을 때 실행할 코드

try:
    #숫자로 변환합니다.
    number_input_a = int(input("정수 입력> "))
except:
    print("정수를 입력하지 않았습니다")
else:
    #출력합니다.
    print("원의 반지름:", number_input_a)
    print("원의 둘레:", 2*3.14*number_input_a)
    print("원의 넓이:", 3.14*number_input_a*number_input_a)
