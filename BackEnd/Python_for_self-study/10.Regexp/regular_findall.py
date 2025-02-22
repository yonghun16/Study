# findall()

# findall은 패턴과 매치되는 모든 값을 찾아 리스트로 리턴한다.

import re

p = re.compile('[a-z]+')
m = p.findall("life is too short")
print(m)
