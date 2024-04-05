# ex 12-2
# 1부터 n가지의 곱을 구하는 함수

def factorial(n):
    fact = 1
    for x in range(1, n+1):
        fact = fact * x
    return fact

print(factorial(5))
print(factorial(10))
