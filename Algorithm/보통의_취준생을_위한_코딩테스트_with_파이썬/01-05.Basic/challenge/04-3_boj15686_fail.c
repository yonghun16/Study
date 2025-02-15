/*-----------------------------------------------------
Sub  : [BOJ] 치킨 배달
Link : https://www.acmicpc.net/problem/15686
Level: 골드 5
Tag  : C, brute force
Memo
-----------------------------------------------------*/

#include <stdio.h>

#define MAX 2500

// 절댓값 반환 함수
int abs(int num) {
    if (num < 0) {
        num *= -1;
    }
    return num;
}

// 정렬
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n, m;
    int home[2][MAX];
    int home_count = 0;
    int chicken[2][MAX];
    int chicken_count = 0;
    int temp;
    int chicken_distance = 99999;
    int city_chicken_distance[14];
    int city_chicken_distance_count = 0;

    scanf("%d %d", &n, &m);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &temp);
            if (temp == 1) {
                home[0][home_count] = i;
                home[1][home_count] = j;
                home_count += 1;
            } else if (temp == 2) {
                chicken[0][chicken_count] = i;
                chicken[1][chicken_count] = j;
                chicken_count += 1;
            }
        }
    }

    for (int i = 0; i < home_count; i++) {
        for (int j = 0; j < chicken_count; j++) {
            temp = abs(home[0][i] - chicken[0][j]) +
                   abs(home[1][i] - chicken[1][j]);
            if (chicken_distance > temp) {
                chicken_distance = temp;
            };
        }
        city_chicken_distance[city_chicken_distance_count++] = chicken_distance;
        chicken_distance = 99999;
    }

    bubbleSort(city_chicken_distance, city_chicken_distance_count);

    int sum = 0;
    for (int i=0; i<m; i++) {
        sum += city_chicken_distance[i];
    }

    printf("%d\n", sum);

    return 0;
}
