#include <stdio.h>
#define P 3.141592

int main(void)
{
    double a;
    printf("radius : ");
    scanf("%lf", &a);
    printf("area = %.3lf", a*a*P);

    return 0;
}
