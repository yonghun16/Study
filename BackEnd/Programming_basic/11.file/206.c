#include <stdio.h>

int main(void)
{
    int a,b,c;
    fscanf(stdin, "%d %d %d", &a, &b, &c);
    int sum = a+b+c;
    fprintf(stdout, "%d %d...%d", sum, sum/3, sum%3);

    return 0;
}
