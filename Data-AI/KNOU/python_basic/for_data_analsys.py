# 리스트와 딕셔너리

# [1] 리스트 슬라이싱
# 리스트이름[시작 인덱스:끝 인덱스:간격]

numbers = [1, 2, 3, 4, 5]
# print(numbers[1:3])

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
first_four = numbers[:4]
# print(first_four)

last_four = numbers[-4:]
# print(last_four)

every_other = numbers[1::2]
# print(every_other)

matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
first_two_rows = matrix[:2]
# print(first_two_rows)

first_two_columns = [row[:2] for row in matrix]
# print(first_two_columns)


# [2] 리스트 컴프리헨션
# [표현식 for 변수 in 리스트 이름 if 조건문]

# 1)
numbers = []
for i in range(5):
    numbers.append(i)
# print(numbers)

numbers = [i for i in range(5)]
# print(numbers)


# 2)
numbers = [1, 2, 3, 4, 5]
squares = []
for num in numbers:
    squares.append(num**2)
# print(squares)

squares = [num**2 for num in numbers]
# print(squares)


# 3)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []
for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
# print(even_numbers)

even_numbers = [num for num in numbers if num % 2 == 0]
# print(even_numbers)


# 4)
list1 = ["사과", "복숭아", "바나나"]
list2 = ["주스", "잼", "통조림"]
pairs = [(fruit1, fruit2) for fruit1 in list1 for fruit2 in list2]
print(pairs)


# [3] 딕셔너리 컴프리헨션
# {키: 표현식 for 변수 in 반복가능객체 if 조건문}

squares = {}
for i in range(5):
    squares[i] = i**2
# print(squares)
