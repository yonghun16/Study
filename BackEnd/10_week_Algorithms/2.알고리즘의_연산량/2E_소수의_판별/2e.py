n = int(input())

def isPrimeNumber(case):
    if case <= 1:      # 1 이하는 소수가 아님
        return 'NO'
    if case == 2:      # 2는 소수
        return 'YES'
    if case % 2 == 0:  # 짝수는 소수가 아님
        return 'NO'

    # 3부터 √case까지 홀수만 검사
    for i in range(3, int(case ** 0.5) + 1, 2):
        if case % i == 0:
            return 'NO'
    return 'YES'

for i in range(n):
    case = int(input())
    print(f"Case #{i+1}") 
    print(isPrimeNumber(case))
