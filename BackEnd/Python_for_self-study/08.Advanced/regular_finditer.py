# finditer

# finditer는 findall과 동일하지만, 그 결과로 반복 가능한 객체(iterator object)를 리턴한다. 그리고 반복 가능한 객체가 포함하는 각각의 요소는 match 객체이다.


import re

p = re.compile('[a-z]+')
m = p.finditer("life is too short")
print(m)

for r in m:
    print(r)
