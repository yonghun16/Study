# 가변 매개변수 함수

def print_n_times(n, *values):
    # n번 반복합니다.
    for i in range(n):
        #values는 리스트처럼 활용합니다.
        for value in values:
            print(value)
        # 단순한 줄바꿈
        print()

print_n_times(3, "안녕하세요", "즐거운", "파이썬 프로그래밍")
