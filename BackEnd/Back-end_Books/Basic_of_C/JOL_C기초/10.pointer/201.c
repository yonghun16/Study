#include <stdio.h>

int main(void)
{
    int a;
    int *p = &a;
    scanf("%d", p);

    for(int i=0; i<*p; i++){
        printf("*");
    }

    return 0;
}
