#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b;
    scanf("%d %d", &a, &b); 

    printf("width = %d\n", a+5);
    printf("length = %d\n", b*2);
    printf("area = %d\n", (a+5)*(b*2));

    return 0;
}
