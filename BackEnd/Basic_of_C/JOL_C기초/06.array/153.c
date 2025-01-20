#include <stdio.h>

int main(int argc, char *argv[])
{
    int arr[100];
    int i = 1, j, n;
    while(1) {
        scanf("%d", &arr[i]);
        if(arr[i] == -1) break;
        i++;
    }

    if(i < 4) n = 1;
    else n = i-3;

    for (j = n; j < i; j++) {
        printf("%d ", arr[j]);
    }
        
    return 0;
}
