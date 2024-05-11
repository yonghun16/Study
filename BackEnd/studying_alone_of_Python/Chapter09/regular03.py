# regular03.py

#  {}    : {}메타 문자를 사용하면 반복 횟수를 고정할 수 있다. 
#  {m}   : 반복 횟수가 m인 경우
#  {m,n} : 반복 횟수가 m부터 n까지인 경우
#  {m,}  : 반복 횟수가 m 이상인 경우
#  {,m}처럼 사용하면 반복 횟수가 m 이하인 경우를 의미


import re


p1 = re.compile('ab{3}c')
p2 = re.compile('ab{2,5}c')
p3 = re.compile('ab{2,}c')
p4 = re.compile('ab{,3}c')

print(p1.match('abc'))     # match
print(p1.match('abbbc'))   # match
print(p1.match('abbbbbc')) # none

print(p2.match('abc'))     # none
print(p2.match('abbbc'))   # match
print(p2.match('abbbbbc')) # match

print(p3.match('abc'))     # none
print(p3.match('abbbbc'))  # match

print(p4.match('abc'))     # match
print(p4.match('abbc'))    # match
