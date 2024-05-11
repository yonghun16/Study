# regular01.py

# []  : ‘[’ 와 ‘]’ 사이의 문자들과 매치’라는 의미를 갖는다.
# -   : [] 안의 두 문자 사이에 하이픈(-)을 사용하면 두 문자 사이의 범위를 의미한다. 예를 들어 [a-c]라는 정규 표현식은 [abc]와 동일하고 [0-5]는 [012345]와 동일하다.


import re


p1 = re.compile('[abc]')
p2 = re.compile('[0-9]')
p3 = re.compile('[\d]')
p4 = re.compile('[\s]')

print(p1.match("a"))         # abc중에 a가 매치
print(p1.match("before"))    # abc중에 before의 b가 매치
print(p1.match("dude"))      # abc중에 dude중 매치되는 글자가 없음. 

print(p3.match("3"))        # 0-5중에 3가 매치
print(p4.match(" "))        # 공백이 매치
