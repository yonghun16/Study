#include <stdio.h>

int recurtive(int a);

int main(int argc, char *argv[])
{
    int n;
    scanf("%d", &n);

    printf("%d\n", recurtive(n));

    return 0;
}

int recurtive(int a)
{
    if(a> 0) {
        int sum = 0;
        sum = (a%10)*(a%10) + recurtive(a/10);
        return sum;
    }

    return 0;
}
