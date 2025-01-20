# 배열의 최대값

import sys
input = sys.stdin.read

def find_max_number(data):
    
    # 첫 줄은 숫자의 개수 N (사용하지 않음)
    N = int(data[0])
    
    # 두 번째 줄의 숫자들을 공백으로 구분하여 리스트로 변환
    numbers = list(map(int, data[1:]))
    
    max_number = max(numbers)
    
    print(max_number)


# 입력 읽기
data = input().strip().split()

find_max_number(data)
