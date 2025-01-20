#include <stdio.h>

int main()
{
    double a,b;
    scanf("%lf %lf", &a, &b);
    if (a >= 4.0f && b >= 4.0f) printf("A");
    else if (a >= 3.0f && b >= 3.0f) printf("B");
    else printf("C");
}
