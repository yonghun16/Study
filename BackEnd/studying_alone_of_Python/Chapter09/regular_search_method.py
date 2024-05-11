# 검색 객체의 메서드

# group  :  매치된 문자열을 리턴한다.
# start  :  매치된 문자열의 시작 위치를 리턴한다.
# end    : 매치된 문자열의 끝 위치를 리턴한다.
# span   : 매치된 문자열의 (시작, 끝)에 해당하는 튜플을 리턴한다.

import re

p = re.compile('[a-z]+')
m = p.match("python")

print(m.group())
print(m.start())
print(m.end())
print(m.span())
print()

m2 = p.search("3 python")   # 문자열 인덱스 2에서 python을 검색 한다.
print(m2.group())
print(m2.start())
print(m2.end())
print(m2.span())
