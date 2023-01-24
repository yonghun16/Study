#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    char str[20];
    scanf("%s", str);

    int a = atoi(str) * 2;
    double b = atof(str);

    printf("%d\n%.2lf", a, b);

    return 0;
}
