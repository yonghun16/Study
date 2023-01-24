#include <stdio.h>

void compute(int a, int b, char com);

int main(int argc, char *argv[])
{
    int a, b;
    char com;
    scanf("%d %c %d", &a, &com, &b);

    compute(a, b, com);

    return 0;
}

void compute(int a, int b, char com)
{
    if(com == '+')
        printf("%d + %d = %d", a, b, a+b);
    else if(com == '-')
        printf("%d - %d = %d", a, b, a-b);
    else if(com == '*')
        printf("%d * %d = %d", a, b, a*b);
    else if(com == '/')
        printf("%d / %d = %d", a, b, a/b);
    else 
        printf("%d %c %d = %d", a, com, b, 0);
}
