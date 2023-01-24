/* 열거형을 사용한 프로그램 */

#include <stdio.h>

enum season { SPRING, SUMMER, FALL, WINTER };   // 열거형 선언

int main(void)
{
    enum season ss;         // 열거형 변수 선언
    char *pc = NULL;        // 문자열 저장할 포인터

    ss = SPRING;            // 열거 멤버의 값 대입
    switch (ss)             // 열거 멤버 판단
    {
        case SPRING:
            pc = "inline"; break;
        case SUMMER:
            pc = "swimming"; break;
        case FALL:
            pc = "trip"; break;
        case WINTER:
            pc = "skiing"; break;
    }
    printf("나의 레저 활동 => %s\n", pc);   // 선택된 문자열 출력

    return 0;
}
