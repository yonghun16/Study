#include <stdio.h>

int main(int argc, char *argv[])
{
    int a;
    int *p = &a;
    scanf("%d", p);
    printf("%d...%d", *p/10, *p%10);

    return 0;
}
