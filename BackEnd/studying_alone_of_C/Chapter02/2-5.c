/* 세 가지 진법의 정수 상수 */

#include <stdio.h>

int main()
{
    // 10진수 출력
    printf("%d\n", 12);     // 10진수
    printf("%d\n", 014);    // 8진수
    printf("%d\n", 0xc);    // 16진수

    // 8진수 16진수 출력
    printf("%o\n", 12);     // 8진수
    printf("%x\n", 12);     // 16진수(소문자)
    printf("%X\n", 12);     // 16진수(대문자)

    return 0;
}
