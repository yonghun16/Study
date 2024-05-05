# 괄호가 없는 튜플
# 괄호 없이 튜플은 사용 가능하다. -> 편리함으로 자주 사용된다. -> 변수의 값을 교환할 때 유용하다.

tuple_test = 10, 20, 30, 40
print("# 괄호가 없는 튜플의 값과 자료형 출력")
print("tuple_test:", tuple_test)
print("type(tuple_test): ", type(tuple_test))
print()

# 괄호가 없는 튜플 활용
a, b, c = 10, 20, 30
e, f = [40, 50]
print("# 괄호가 없는 튜플을 활용한 할당")
print("a:", a)
print("b:", b)
print("c:", c)
print("e:", e)
print("f:", f)
print("type of a: ", type(a))
print("type of e: ", type(e))
