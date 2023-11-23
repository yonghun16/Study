#include <stdio.h>

int main (void)
{
    int a, b;
    scanf("%d %d", &a, &b);

    printf("%d\n", (b%10)*a );
    printf("%d\n", ((b/10) %10)*a );
    printf("%d\n", ((b/100) %10)*a );
    printf("%d\n", a*b);

    return 0;
}