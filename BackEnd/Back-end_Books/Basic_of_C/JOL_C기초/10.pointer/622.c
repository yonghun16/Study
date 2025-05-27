#include <stdio.h>

int main(void)
{
    int a[5];
    int *p = a;
    int i;

    for(i=0; i<5; i++){
        scanf("%d", &p[i]);
    }

    for(i=0; i<5; i+=2){
        printf("%d ", p[i]);
    }

    return 0;
}
