#include <stdio.h>

int main(void)
{
    int a;
    int *p;
    p = &a;

    scanf("%d", &a);

    printf("%p %d", p, *p);

    return 0;
}
