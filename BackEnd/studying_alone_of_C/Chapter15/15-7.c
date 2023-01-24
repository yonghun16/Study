/* 함수 포인터를 사용한 함수 호출 */

#include <stdio.h>

int sum(int, int);

int main(void)
{
    int (*fp)(int, int);            // 함수 포인터 선언
    int res;                        // 반환 값을 저장할 변수

    fp = sum;                       // 함수 명을 함수 포인터에 저장 -> 함수명은 주소다.
    res = fp(10, 20);               // 함수 포인터로 함수 호출
    // res = (*sum)(10, 30);        // 함수명은 주소이므로 간접참조연산자 사용 가능
    printf("result : %d\n", res);   // 반환값 출력

    return 0;
}

int sum(int a, int b)
{
    return (a + b);
}

