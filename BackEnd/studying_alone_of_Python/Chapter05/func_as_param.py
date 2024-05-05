# 람다
# 함수라는 '기능'을 매개변수로 전달하는 코드를 많이 사용함 (자바스크립트의 콜백 함수 같은 개념)
# 이런 기능을 조금 더 효율적으로 작성 할 수 있도록 파이썬은 '람다'라는 기능 제공


# 매개변수로 받은 함수를 10번 호출하는 함수
def call_10_times(func):
    for i in range(10):
        func()


# 간단한 출력 함수
def print_hello():
    print("안녕하세요")

# 조합하기
call_10_times(print_hello)  # 매개변수로 함수를 전달함.
