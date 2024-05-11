# regular02.py

# \d  : [0-9]          숫자와 매치 
# \D  : [^0-9]         숫자가 아닌 것과 매치
# \s  : [\t\n\r\f\v]   whitespace와 매치
# \S  : [^\t\n\r\f\v]  whitespace가 아닌 것와 매치
# \w  : [a-zA-Z0-9_]   '문자+숫자'와 매치
# \W  : [^a-zA-Z0-9_]  '문자+숫자'가 아닌 것와 매치


import re


p1 = re.compile('a\db')
p2 = re.compile('a\Db')
p3 = re.compile('a\sb')
p4 = re.compile('a\wb')


print(p1.match('a9b'))       # match

print(p2.match('a9b'))       # none
print(p2.match('a*b'))       # match

print(p3.match('a\nb'))      # match

print(p4.match('aTb'))       # match
