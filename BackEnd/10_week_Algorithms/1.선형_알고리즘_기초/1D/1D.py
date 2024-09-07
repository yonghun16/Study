# 1D 카운팅하기

# 입력 받기
n, m, s = map(int, input().split())
heights = list(map(int, input().split()))

# 미주와 지수의 키와 같은 사람 수 세기
count = 0
for height in heights:
    if height == m or height == s:
        count += 1

# 결과 출력
print(count)
