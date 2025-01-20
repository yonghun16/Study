#include <stdio.h>

int main(void)
{
    int num;
    int sum = 0, i = 0;
    while(1)
    {
        scanf("%d", &num);
        if(num > 100 || num < 0) break;
        sum += num;
        i++;
    }
    printf("sum : %d\n", sum);
    printf("avg : %.1lf", sum/(double)i);

    return 0;
}
