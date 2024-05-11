# regular03.py

#  {}  : {}메타 문자를 사용하면 반복 횟수를 고정할 수 있다. 
#  {m, n} 정규식을 사용하면 반복 횟수가 m부터 n까지인 문자와 매치할 수 있다. 
#   m 또는 n을 생략할 수도 있다. 만약 {3,}처럼 사용하면 반복 횟수가 3 이상인 경우이고 {, 3}처럼 사용하면 반복 횟수가 3 이하인 경우를 의미한다. 생략된 m은 0과 동일하며, 생략된 n은 무한대(약 2억 개 미만)의 의미를 갖는다.


import re


p1 = re.compile('a.b')
p2 = re.compile('a..b')    # 문자 2개 match하는지 확인
p3 = re.compile('a[.]b')   # [.]은 .과 match를 의미합니다.

p4 = re.compile('ab*c')    # 'b'의 반복
p5 = re.compile('a[b0]*c') # 'b0'의 반복


print(p1.match('a b'))     # match
print(p1.match('a0b'))     # match
print(p2.match('a(*b'))    # match
print(p2.match('aABb'))    # match
print(p3.match('a.b'))     # match

print(p4.match('abbbbc'))     # match
print(p5.match('ab0b0c'))     # match

