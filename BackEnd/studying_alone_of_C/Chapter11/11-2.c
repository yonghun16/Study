/* 공백이나 제어 문자의 입력 */

#include <stdio.h>

int main(void)
{
    char ch1, ch2;

    scanf("%c%c", &ch1, &ch2);      // 2개의 문자를 연속 입력
    printf("[%c%c]\n", ch1, ch2);     // 입력된 문자 출력

    return 0;
}
