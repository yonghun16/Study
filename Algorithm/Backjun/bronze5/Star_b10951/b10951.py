# A+B -4
# https://www.acmicpc.net/problem/10951

while True:
    try:
        a, b = map(int, input().split())
        print(a + b)
    except EOFError:
        break
