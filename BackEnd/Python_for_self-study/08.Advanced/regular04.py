# regular04.py

#  *  : {0,}과 같다. *은 * 바로 앞에 있는 문자가 0부터 무한대까지 반복될 수 있다는 의미이다.
#  +  : {1,}과 같다.  +는 최소 1번 이상 반복될 때 사용한다. 즉, *가 반복 횟수가 0부터라면 +는 반복 횟수가 1부터
#  ?  : {0, 1}과 같다. ?는 앞 문자가 있거나 없는 경우


import re


p1 = re.compile('ab*c')       # 'b'의 반복
p2 = re.compile('a[b0]*c')    # 'b0'의 반복
p3 = re.compile('ab+c')       # 'b'의 1번 이상 반복
p4 = re.compile('ab?c')       # 'b'가 있어도 되고 없어도 되고


print(p1.match('ac'))         # match
print(p1.match('abbbbc'))     # match
print(p2.match('ab0b0c'))     # match

print(p3.match('ac'))         # none
print(p3.match('abc'))        # match

print(p4.match('ac'))         # match
print(p4.match('abc'))        # match
print(p4.match('adc'))        # none
