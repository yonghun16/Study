#include <stdio.h>

int main(int argc, char *argv[])
{
    int n, i;
    int arr[100];
    int num = 100;
    scanf("%d", &n);

    arr[0] = 100;
    arr[1] = n;
    
    for (i = 2; i < 100; i++) {
        num = arr[i-2] - arr[i-1];
        arr[i] = num;
        if( num < 0) break;
    }

    for (i = 0; arr[i] >= 0; i++) {
        printf("%d ", arr[i]);
    }
    printf("%d ", arr[i]);

    return 0;
}
