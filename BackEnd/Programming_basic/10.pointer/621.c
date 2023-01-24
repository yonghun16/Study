#include <stdio.h>

int main(void)
{
    int a, b;
    int *p1 = &a;
    int *p2 = &b;

    scanf("%d %d", p1, p2);

    printf("%d + %d = %d\n", *p1, *p2, *p1 + *p2);
    printf("%d - %d = %d\n", *p1, *p2, *p1 - *p2);
    printf("%d * %d = %d\n", *p1, *p2, *p1 * *p2);
    printf("%d / %d = %d\n", *p1, *p2, *p1 / *p2);

    return 0;
}
