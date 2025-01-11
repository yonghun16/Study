def bubble_sort(arr, N):
    cnt = 0
    for i in range(0, N):
        for j in range(0, N-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                cnt += 1
        if cnt == 0:   # 이미 정렬이 되어 있는지 확인
            break   


N = int(input())
arr = list(map(int, input().split()))

bubble_sort(arr, N)

print(*arr)
# print(*(int(el) for el in arr))
