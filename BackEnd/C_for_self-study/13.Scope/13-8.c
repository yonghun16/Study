/* 주소를 반환하여 두 정수의 합 계산 */

#include <stdio.h>

int *sum(int a, int b);

int main(void)
{
    int *resp;              // 반환값을 저장할 포인터

    resp = sum(10, 20);
    printf("두 정수의 합 : %d\n", *resp);

    return 0;
}

int *sum(int a, int b)      // int형 변수의 주소를 반환하는 함수
{
    static int res;         // 정적 지역 변수

    res = a + b;            // 두 정수의 합을 

    return &res;
}
