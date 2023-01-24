#include <stdio.h>

int main(int argc, char *argv[])
{
    int arr[11][11] = { {1} };
    int i, j, n;
    scanf("%d", &n);

    for(i = 1; i <=n; i++) {
        for (j = 1; j <i+1; ++j) {
            arr[i][j] = arr[i-1][j] + arr[i-1][j-1];
        }
    }

    for(i = n; i >=1; i--) {
        for (j = i; j >= 1; j--) {
            printf("%d ", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}

