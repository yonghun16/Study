# 2부터 9까지 루프
for i in range(2, 10):
    # 바깥쪽 루프를 반복하는 동안 1부터 9까지 루프
    for j in range(1, 10):
        # 양쪽 루프의 값을 곱하여 출력하기
        print(i, "x", j, "=", i*j)
