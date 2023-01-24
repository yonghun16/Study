#include <stdio.h>

int main(int argc, char *argv[])
{
    int num, sum=0;
    scanf("%d", &num);

    for(int i=num; i<=100; i++) {
        sum += i;
    }

    printf("%d\n", sum);

    return 0;
}
