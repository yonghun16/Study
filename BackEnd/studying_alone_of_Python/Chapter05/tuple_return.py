# 튜플과 함수
# 튜플은 함수 리턴에 많이 사용됨 -> 여러개의 값을 리턴하고 할당 할 수 있음

# 함수를 선언합니다.
def test():
    return (10, 20)

# 여러 개의 값을 리턴받습니다.
a, b = test()

# 출력합니다.
print("a:", a)
print("b:", b)
