#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b;

    scanf("%d %d", &a, &b);
    printf("%d %d\n", a+100, b%10);

    return 0;
}
