# 문자열 처리 함수들

# 1. 문자열 길이
print()
print("== 1. 문자열 길이 ==")
print(len("Python"))     # 6
print(len("파이썬"))     # 3


# 2. 문자열 찾기
print()
print("== 2. 문자열 찾기 ==")
# find()로 문자열 찾기, 찾으면 첫번째 인덱스를 리턴하고 없으면 '-1' 을 리턴 한다.
# index()로 문자열 찾기, 찾으면 첫번째 인덱스를 리턴하고 없으면 'error' 처리된다.
str1 = "Hello Python! 안녕하세요 파이썬 이에요! 안녕하세요 Python!"
print(str1.find("Python!"))
print(str1.find("파이썬!"))
print(str1.index("Python!"))
try:
    print(str1.index("파이썬!"))
except ValueError:
    print("파이썬! 찾지 못함")


# 3. 문자열 바꾸기
print()
print("== 3. 문자열 바꾸기 ==")
print("Python".replace("P", "p"))


# 4. 공백 제거
print()
print("== 4. 공백 제거 ==")
print("   Python   ".strip())
print("   Python   ".lstrip())
print("   Python   ".rstrip())


# 5. 문자 개수세기
print()
print("== 5. 문자 개수세기 ==")
str1 = "Python Python Python"
print(str1.count("y"))


# 6. 대,소문자 변환
print()
print("== 6. 대,소문자 변환 ==")
str1 = "hello PYTHON!"
print(str1.upper())
print(str1.lower())
print(str1.capitalize())   # 첫자만 대문자로 변환


# 7. 문자열 나누기
print()
print("== 7. 문자열 나누기 ==")
str1 = "Python Python Python"
print(str1.split(" "))

# 8. 문자열 합치기
print()
print("== 8. 문자열 합치기 ==")
print("Python".join(["1", "2", "3"]))           # 1Python2Python3
print(" ".join(["This", "is", "Sparta"]))       # This is Sparta
print(",".join(["Romance", "Horror", "SF"]))    # Romance,Horror,SF
