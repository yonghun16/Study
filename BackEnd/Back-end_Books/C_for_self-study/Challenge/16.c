#include <stdio.h>
#include <stdlib.h>

int input();
void process(int, int *);
void output(int, int *);

int main(void)
{
    int n;
    n = input();
    int *arr;
    arr = (int *)malloc(n * sizeof(int));
    process(n, arr);
    output(n, arr);

    free(arr);
    return 0;
}

int input()
{
    int n;
    printf("> 양수 입력 : ");
    scanf("%d", &n);
    return n;
}

void process(int n, int *arr)
{
    int i, j;
    for (i = 2; i <= n; ++i) {
        for (j = 2; j < i; ++j) {
            arr[i] = i;
            if(i%j == 0) {
                arr[i] = 0;
                break;
            }
        }
    }
    arr[2] = 2;
}

void output(int n, int *arr)
{
    int i;
    int cnt=1;
    for (i = 2; i <= n; ++i) {
        if(arr[i] == 0) {
            printf("%5c", 'X');
        }
        else {
            printf("%5d", arr[i]);
        }
        if (cnt%5 == 0) {
            printf("\n");
        }
        cnt++;
    }
    printf("\n");

}
