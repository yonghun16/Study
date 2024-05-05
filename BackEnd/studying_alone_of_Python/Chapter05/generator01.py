# 제네레이터

# 함수를 선언합니다.
def test():
    print("A 지점 통과")
    yield 1
    print("B 지점 통과")
    yield 2
    print("C 지점 통과")

# 함수를 호출합니다.
output = test()   # test()는 제네레이터가 된다.

# next() 함수를 호출합니다.
print("D 지점 통과")
a = next(output)
print(a)    # yield 1 까지 출력

print("E 지점 통과")
b = next(output)
print(b)    # yield 1 다음부터 yield 2 까지 출력

print("F 지점 통과")
c = next(output)
print(c)    # yield 2 다음부터 yield 3 까지 출력

#한번 더 실행하기
next(output) # 에러 발생

