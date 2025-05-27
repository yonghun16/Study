# 자식 클래스에서 부모 클래스에 없는 새로운 함수 정의하기


# 사용자 정의 예외를 생성합니다.
class CustomException(Exception):
    def __init__(self, message, value):
        Exception.__init__(self)
        self.message = message
        self.value = value

    def __str__(self):
        return self.message

    # 부모 클래스에 없는 함수를 자식에서 재정의함.
    def print(self):
        print("###### 오류 정보 ######")
        print("메시지:", self.message)
        print("값:", self.value)


# 예외를 발생시켜 봅니다.
try:
    raise CustomException("딱히 이유 없음", 273)
except CustomException as err:
    err.print()
