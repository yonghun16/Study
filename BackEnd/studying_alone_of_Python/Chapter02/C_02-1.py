# 02-1 자료형과 문자열

print("안녕하세요")
print('안녕하세요')

print('"안녕하세요"라고 말했습니다.')
print("'배가 고픕니다'라고 생각했습니다.")

print("\"안녕하세요\"라고 말했습니다.")
print('\'배가 고픕니다\'라고 생각했습니다.')

print("안녕하세요\n안녕하세요")
print("안녕하세요\t안녕하세요")

print("\\ \\ \\ \\")
print()

# 여러 문자열 만들기
print("동해물과 백두산이 마르고 닳도록\n하느님이 보우하사 우리 나라 만세\n무궁화 삼천리 화려강산 대한사람\n대한으로 길이 보전하세")

# 가독성이 좋아지지만 줄바꿈 발생
print("""
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리 나라 만세
무궁화 삼천리 화려강산 대한사람
대한으로 길이 보전하세
""")

# 줄바꿈 없이 문자열 만들기
print("""\
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리 나라 만세
무궁화 삼천리 화려강산 대한사람
대한으로 길이 보전하세\
""")


# +
print("hello " + "sir")
print("hello" + "!")

#print("hello" + 1)  # error
print("hello" + "1")

# *
print(3 * "hello ")

#indexing
print("hello"[2])

# slising
print("Hello"[0:3])

# len()
print(len("hello"))
