/* 형 변환 연산자가 필요한 경우 */

#include <stdio.h>

int main(void)
{
    int a = 20, b = 3;
    double res;

    res = ((double)a) / ((double)b);  // (double)을 사용해 a와 b의 값을 실수로 변환
    printf("a = %d, b = %d\n", a, b);
    printf("a / b의 결과 : %.1lf\n", res);

    a = (int)res;
    printf("(int)%.1lf의 결과 : %d\n", res, a);

    return 0;
}
