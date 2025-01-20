#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b;
    int c, d;

    scanf("%d %d", &a, &b);
    scanf("%d %d", &c, &d);

    printf("%d\n", (a > c && b > d));

    return 0;
}
