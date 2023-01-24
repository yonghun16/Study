/* 다른 함수의 변수 사용하기 */

#include <stdio.h>

void swap(void);

int main(void)
{
    int a = 10, b = 20;

    swap();
    printf("a:%d, b:%d\n", a, b);

    return 0;
}

void swap(void)
{
    int temp;

    temp = a;  // a는 선언되지 않았 변수라는 에러 발생
    a = b;     // b는 선언되지 않은 변수라는 에러 발생
    b = temp;
}
