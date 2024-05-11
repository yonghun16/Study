# search()

# search()  :   '문자열 전체'를 검색하여 정규식과 매치되는지 조사한다.
# "3 python" 문자열의 첫 번째 문자는 "3"이지만, search는 문자열의 처음부터 검색하는 것이 아니라 문자열 전체를 검색하기 때문에 "3" 이후의 "python" 문자열과 매치된다.

import re

p = re.compile('[a-z]+')
m = p.search( '3 python' )
if m:
    print('Match found: ', m.group())
else:
    print('No match')
