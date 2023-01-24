#include <stdio.h>

int main(void)
{
    double a, b;
    char c;

    scanf("%lf %lf %c", &a, &b, &c);

    printf("%.2lf\n", a);
    printf("%.2lf\n", b);
    printf("%c\n", c);

    return 0;
}
