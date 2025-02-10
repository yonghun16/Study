/* 문자열을 출력하는 puts와 fputs 함수 */

#include <stdio.h>

int main(void)
{
    char str[80] = "apple juice";   // 배열에 문자열 초기화
    char *ps = "banana";            // 포인터에 문자열 초기화

    puts(str);                      // apple juice 출력하고 줄 바꿈
    fputs(ps, stdout);              // banana만 출력
    puts("milk");                   // banana에 이어 milk 출력

    return 0;
}
