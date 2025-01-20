#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    int n;
    int max = 0;
    int min = 9999999;
    scanf("%d", &n);

    int *a = (int *)malloc(sizeof(int)*n);

    for(int i=0; i<n; i++) {
        scanf("%d", a+i);
        if(*(a+i) > max) {
            max = *(a+i);
        }
        if(*(a+i) < min) {
            min = *(a+i);
        }
    }

    printf("max : %d\n", max);
    printf("min : %d\n", min);


    return 0;
}
