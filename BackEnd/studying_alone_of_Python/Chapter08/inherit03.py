# 오버 라이드

# 자식 클래스에서 부모 클래스의 변수나 함수를 재정의(덮어씀) 하기


class CustomException(Exception):
    def __init__(self):
        Exception.__init__(self)
        print("##### 내가 만든 오류가 생성되었어요! #####")
    
    # 부모 클래스에 정의 된 __str__을 자식에서 재정의함.
    def __str__(self):
        return "오류가 발생했어요"


raise CustomException
