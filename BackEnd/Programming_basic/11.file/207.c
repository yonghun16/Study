#include <stdio.h>

int main(void)
{
    int a, b;
    char c;
    fscanf(stdin, "%d %d %c", &a, &b, &c);
    switch(c)
    {
    case '+':
        fprintf(stdout, "%d + %d = %d", a, b, a+b);
        break;
    case '-':
        fprintf(stdout, "%d - %d = %d", a, b, a-b);
        break;
    case '*':
        fprintf(stdout, "%d * %d = %d", a, b, a*b);
        break;
    case '/':
        fprintf(stdout, "%d / %d = %d", a, b, a/b);
        break;
    case '%':
        fprintf(stdout, "%d %% %d = %d", a, b, a%b);
        break;
    }

    return 0;
}
