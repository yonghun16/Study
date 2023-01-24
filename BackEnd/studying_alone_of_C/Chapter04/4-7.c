/* 연산의 결괏값을 사용하는 방법 */

#include <stdio.h>

int main(void)
{
    int a = 10, b = 20, res;

    a + b;      // 연산 결과는 버려짐
    printf("%d + %d = %d\n", a, b, a + b);

    res = a + b;
    printf("%d + %d = %d\n", a, b, res);

    return 0;
}
