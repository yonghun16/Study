# closure.py

# 클로저는 간단히 말해 함수 안에 내부 함수(inner function)를 구현하고 그 내부 함수를 리턴하는 함수를 말한다


# 클로저 사용 전 
class Mul:
    def __init__(self, m):
        self.m = m

    def mul_fun(self, n):
        return self.m * n

if __name__ == "__main__":
    mul3 = Mul(3)
    mul5 = Mul(5)

    print(mul3.mul_fun(10))  # 30 출력
    print(mul5.mul_fun(10))  # 50 출력


# 클로저 사용
class Mul2:
    def __init__(self, m):
        self.m = m

    def __call__(self, n):
        return self.m * n

if __name__ == "__main__":
    mul3 = Mul2(3)
    mul5 = Mul2(5)

    print(mul3(10))  # 30 출력
    print(mul5(10))  # 50 출력
