# 거짓(False) 값들
print(False, type(False))
print(bool(0))            #숫자 0
print(bool(""))           #empty string
print(bool(''))           #empty string
print(bool(""""""))       #empty string
print(bool(''''''))       #empty string
print(bool([]))           #empty list
print(bool(()))           #empty tuple
print(bool({}))           #empty dict, set
print(bool(None))         #null value
print(bool(1000/2 * 0))   #위의 거짓 값들로 계산되는 식 또는 함수


# 참(True) 값들
print(True, type(True))
print(bool(1))
print(bool(-1))
print(bool(0.000234))
print(bool([1,2]))
print(bool("홍길동"))
print(bool([False]))      #아무 값이라도 들어 있는 list, set, dict, tuple 등은 참값을 가진다
print(bool([None]))       #아무 값이라도 들어 있는 list, set, dict, tuple 등은 참값을 가진다
print(bool([[]]))         #아무 값이라도 들어 있는 list, set, dict, tuple 등은 참값을 가진다
print(bool("''"))         #empty 문자열에 empty 문자열이 들어 있어도 참값을 가진다
