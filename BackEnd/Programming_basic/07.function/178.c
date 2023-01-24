#include <stdio.h>

int power(int n);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);
    n = 6;

    printf("%d\n", power(n));

    return 0;
}

int power(int n)
{
    int res=1;
    int i;
    for(i=1; i<=n; i++)
        res *= 2;

    return res;
}
