''' 출력 포멧 '''
# ; 로 두줄의 내용을 한 줄로 쓸 수 있음.
FirstName = 'Jae-in'; LastName = 'Moon'

print('My name is ' + FirstName + ' ' + LastName + '.')
print(f'My name is {FirstName} {LastName}.')
print('My name is %s %s.' % (FirstName, LastName))
print('My name is {0} {1}.'.format(FirstName, LastName))
print('My name is {} {}.'.format(FirstName, LastName))



''' 소수점 자리수 출력 '''
yesVotes = 42572654; noVotes = 42_132_495
approvalRate = yesVotes / (yesVotes + noVotes)

print(approvalRate)
# %-formatting
print('{:9} Yes votes : {:7.1%}'.format(yesVotes, approvalRate))
# f-string
print(f'{yesVotes:9} Yes votes : {approvalRate:7.1%}')



''' 파이썬 모듈 사용하기 '''
# moduleaud+.
import math
print(f'The value of pi is approximately {math.pi:.3f}.')
