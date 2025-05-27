# match()의 결괏값이 있을 대만 그 작업 수행하기

# match()   :  문자열의 처음이 정규식과 매치되는지 조사한다.
# "3 python" 문자열은 처음에 나오는 문자 3이 정규식 [a-z]+에 부합되지 않으므로 None이 리턴된다.

import re

p = re.compile('[a-z]+')
m = p.match( '3 python' )
if m:
    print('Match found: ', m.group())
else:
    print('No match')
