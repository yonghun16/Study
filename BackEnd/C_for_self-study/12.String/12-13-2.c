/* (리턴하지 않는)strcpy와 기능이 같은 함수의 구현 */

#include <stdio.h>

char my_strcpy(char *pd, char *ps);     // 포인터함수로 선언할 필요 없음

int main(void)
{
    char str[80] = "strawberry";

    printf("바꾸기 전 문자열 : %s\n", str);
    my_strcpy(str, "apple");
    printf("바꾼 후 문자열 : %s\n", str);
    my_strcpy(str, "kiwi");
    printf("바꾼 후 문자열 : %s\n", str);
    //printf("다른 문자열 대입 : %s\n", my_strcpy(str, "kiwi"));    // 사용불가

    return 0;
}

char my_strcpy(char *pd, char *ps)
{
    while(*ps != '\0') {
        *pd = *ps;
        pd++;
        ps++;
    }
    *pd = '\0';

    return 0;
}
