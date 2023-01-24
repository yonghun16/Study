#include <stdio.h>

void print(int a);

int main(int argc, char *argv[])
{
    int a;
    scanf("%d", &a);
    print(a);

    return 0;
}

void print(int a)
{
    printf("%.2lf", a*a*3.14);
}
