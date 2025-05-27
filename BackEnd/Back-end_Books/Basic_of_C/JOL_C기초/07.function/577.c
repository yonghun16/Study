#include <stdio.h>

void Change(int *a, int *b);

int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    Change(&a, &b);
    printf("%d %d", a, b);

    return 0;
}

void Change(int *a, int *b)
{
    if(*a > *b){
        *a /= 2;
        *b *= 2;
    }
    else{
        *b /= 2;
        *a *= 2;
    }
}
