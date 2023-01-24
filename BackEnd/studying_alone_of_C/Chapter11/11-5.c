/* 입력 문자의 아스키 코드 값을 출력하는 프로그램 */

#include <stdio.h>

int main(void)
{
    int res;                // scanf 함수의 반환값을 저장할 변수
    char ch;                // 문자를 입력할 변수

    while(1)
    {
        res = scanf("%c", &ch); // 문자 입력
        if (res == -1) break;
        printf("%d ", ch);
    }

    return 0;
}
