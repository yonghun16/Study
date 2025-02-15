/*-----------------------------------------------------
Sub  : [BOJ] 최소, 최대
Link : https://www.acmicpc.net/problem/10818
Level: 브론즈 3
Tag  : C,
Memo
-----------------------------------------------------*/

#include <stdio.h>

#define MAX 1000000

int main() {
    int n;
    int arr[MAX];
    int num_max = -MAX;
    int num_min = MAX;

    // 입력
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        if (arr[i] > num_max) num_max = arr[i];
        if (arr[i] < num_min) num_min = arr[i];
    }

    // 출력
    printf("%d %d\n", num_min, num_max);

    return 0;
}
