/* 허용되지 않는 포인터의 대입 */

#include <stdio.h>

int main(void)
{
    int a = 10;
    int *p = &a;
    double *pd;

    pd = p;     // 포인터 p값을 포인터 pd에 대입
    printf("%lf\n", *pd);

    return 0;
}
