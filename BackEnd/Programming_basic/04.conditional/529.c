#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, c;
    scanf("%d %d", &a, &b);
    c = b+100-a;

    printf("%d\n", c);
    if (c > 0) {
        printf("Obesity");
    }

    return 0;
}
