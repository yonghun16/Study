/* 포인터를 써서 변수의 값에 10을 더하는 경우 */

#include <stdio.h>

void add_ten(int *pa);      // 매개변수로 포인터 pa 선언

int main(void)
{
    int a = 10;

    add_ten(&a);            // a의 주소를 인수로 준다.
    printf("a : %d\n", a);

    return 0;
}

void add_ten(int *pa)       // 포인터 pa가 a의 주소를 받는다.
{
    *pa = *pa + 10;         // 포인터 pa가 가리키는 변수의 값 10 증가
}
