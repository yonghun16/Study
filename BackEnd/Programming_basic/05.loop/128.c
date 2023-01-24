#include <stdio.h>

int main(void)
{
    int num;
    int i = 0;

    while(1)
    {
        scanf("%d", &num);
        if (num == 0) break;
        if ((num % 3 != 0) && (num % 5 != 0)) i++;
    }
    printf("%d", i);

    return 0;
}
