#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, c;

    scanf("%d %d", &a, &b);

    c = a++ * --b;
    printf("%d %d %d\n", a, b, c);

    return 0;
}
