/* 두 함수에서 같은 이름의 지역 변수를 사용한 경우 */

#include <stdio.h>

void assign(void);      // 함수 선언

int main(void)
{
    auto int a = 0;

    assign();
    printf("main 함수 a : %d\n", a);

    return 0;
}

void assign(void)
{
    int a;  // main 함수에 있는 변수와 같은 이름의 지역변수, auto 생략

    a = 10;
    printf("assing 함수 a : %d\n", a);
}
