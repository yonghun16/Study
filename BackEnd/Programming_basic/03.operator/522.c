#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, c;
    scanf("%d %d", &a, &b); 

    c = a == b ? 1 : 0;
    printf("%d\n", c);

    c = a != b ? 1 : 0;
    printf("%d\n", c);


    return 0;
}
