/*-----------------------------------------------------
Sub  : [BOJ] 나는 요리사다
Link : https://www.acmicpc.net/problem/2953
Level: 브론즈 3
Tag  : C,
Memo
-----------------------------------------------------*/

#include <stdio.h>

int main() {
    int n = 5, m = 4;
    int arr[5][4];
    int sum_score = 0;
    int participant;
    int max_score = 0;

    // 입력
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            scanf("%d", &arr[i][j]);
            sum_score += arr[i][j];
        }
        if (max_score < sum_score) {
            max_score = sum_score;
            participant = i + 1;
        }
        sum_score = 0;
    }

    // 출력
    printf("%d %d\n", participant, max_score);

    return 0;
}
