# regular02.py

#  .  : 정규 표현식의 .(dot) 메타 문자는 줄바꿈 문자인 \n을 제외한 모든 문자와 매치된다는 것을 의미한다.
#  *  : *은 * 바로 앞에 있는 문자가 0부터 무한대까지 반복될 수 있다는 의미이다.
#  +  : +는 최소 1번 이상 반복될 때 사용한다. 즉, *가 반복 횟수가 0부터라면 +는 반복 횟수가 1부터인 것이다.


import re


p1 = re.compile('a.b')
p2 = re.compile('a..b')    # 문자 2개 match하는지 확인
p3 = re.compile('a[.]b')   # [.]은 .과 match를 의미합니다.

p4 = re.compile('ab*c')    # 'b'의 반복
p5 = re.compile('a[b0]*c') # 'b0'의 반복

p6 = re.compile('ab+c')    # 'b'의 1번 이상 반복


print(p1.match('a b'))     # match
print(p1.match('a0b'))     # match
print(p2.match('a(*b'))    # match
print(p2.match('aABb'))    # match
print(p3.match('a.b'))     # match

print(p4.match('ac'))         # match
print(p4.match('abbbbc'))     # match
print(p5.match('ab0b0c'))     # match

print(p6.match('ac'))         # none
print(p6.match('abc'))         # match
