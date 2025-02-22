# regular01.py

# []  : ‘[’ 와 ‘]’ 사이의 문자들과 매치’라는 의미를 갖는다.
#  -  : [] 안의 두 문자 사이에 하이픈(-)을 사용하면 두 문자 사이의 범위를 의미한다. 
#       예를 들어 [a-c]라는 정규 표현식은 [abc]와 동일하고 [0-5]는 [012345]와 동일하다.
#  .  : 정규 표현식의 .(dot) 메타 문자는 줄바꿈 문자인 \n을 제외한 모든 문자와 매치된다는 것을 의미한다.


import re


p1 = re.compile('[abc]')
p2 = re.compile('[0-9]')
p3 = re.compile('a.b')       # 어떤 문자든 1개가 존재하는지 확인
p4 = re.compile('a..b')      # 어떤 문자든 2개가 존재하는지 확인
p5 = re.compile('a[.]b')     # [.]은 .과 match를 의미합니다.


print(p1.match("a"))         # match   abc중에 a가 매치
print(p1.match("before"))    # match   abc중에 before의 b가 매치
print(p1.match("dude"))      # none    abc중에 dude중 매치되는 글자가 없음. 

print(p2.match('9'))         # match

print(p3.match('a b'))       # match   a와 b 사이에 공백이 매치
print(p3.match('a0b'))       # match
print(p4.match('a(*b'))      # match
print(p4.match('aABb'))      # match
print(p5.match('a.b'))       # match
