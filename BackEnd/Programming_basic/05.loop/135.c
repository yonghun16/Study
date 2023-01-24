#include <stdio.h>

int main(void)
{
    int s,e,i;
    int sum = 0;
    scanf("%d %d", &s, &e);
    if(s > e)
    {
        int tmp = s;
        s = e;
        e = tmp;
    }
    for(i=0;s<=e;s++)
    {
        if(s%3==0 || s%5==0) {
            sum+=s;
            i++;
        }
    }
    printf("sum : %d\n", sum);
    printf("avg : %.1lf", sum/(double)(i));

    return 0;
}
