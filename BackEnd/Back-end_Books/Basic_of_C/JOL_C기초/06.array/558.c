#include <stdio.h>

int main(int argc, char *argv[])
{
    int arr[100];
    int i=1, j;
    while(1) {
        scanf("%d", &arr[i++]);
        if(arr[i-1] == 0) {
            arr[0] = '\0';
            break;
        }
    }
    for(j = i-2; j>0; j--) {
        printf("%d ", arr[j]);
    }

    return 0;
}
