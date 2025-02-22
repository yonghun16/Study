# reversed() 함수와 이터레이터

numbers = [1, 2, 3, 4, 5, 6]
r_num = reversed(numbers)

# reversed_numbers를 출력합니다.
print("reversed_numbers :", r_num)
print(next(r_num))                 # 6
print(next(r_num))                 # 5
print(next(r_num))                 # 4
print(next(r_num))                 # 3
print(next(r_num))                 # 2
