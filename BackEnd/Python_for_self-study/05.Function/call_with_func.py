# map()함수와 filter()함수

def power(item):
    return item * item
def under_3(item):
    return item < 3

# 변수를 선언합니다.
list_input_a = [1, 2, 3, 4, 5]

# map() 함수를 사용합니다.
output_a = map(power, list_input_a)    # 함수를 매개변수로 넣음
print("# map() 함수의 실행결과")
print("map(power, list_input_a):", output_a)   # 제네레이터가 출력
print("map(power, list_input_a):", list(output_a))  # [1, 4, 9, 16, 25]
print()

# filter() 함수를 사용합니다.
output_b = filter(under_3, list_input_a)  # 함수를 매개변수로 넣음
print("# filter() 함수의 실행결과")
print("filter(under_3, list_input_a):", output_b) # 제네레이터가 출력
print("filter(under_3, list_input_a):", list(output_b))  # [1, 2]
