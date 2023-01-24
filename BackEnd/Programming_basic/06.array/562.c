#include <stdio.h>

int main(int argc, char *argv[])
{
    int n = 10;
    int sum1=0, sum2=0;
    int arr[10];
    int i;

    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        if (i % 2) {
           sum1 += arr[i]; 
        }
        else {
            sum2 += arr[i];
        }
    }

    printf("sum : %d\n", sum1);
    printf("avg : %.1lf\n", (double)sum2/5);

    return 0;
}
