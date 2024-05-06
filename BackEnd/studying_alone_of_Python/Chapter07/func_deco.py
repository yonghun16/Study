# 함수 데코레이터
# 함수에 부가적인 내용을, 혹은 반복할 내용을 데코레이터로 정의하여 쉽게 사용 할 수 있음.
# 다음 코드는 호출하는 함수 앞뒤에 텍스트를 붙입니다.

# 함수 데코레이터를 생성합니다.
def test_deco(function):
    def wrapper():
        print("인사가 시작되었습니다.")
        function()
        print("인사가 종료되었습니디.")
    return wrapper

# 데코레이터를 붙여 함수를 만듭니다.
@test_deco
def hello():
    print("hello")

# 함수를 호출합니다.
hello()
