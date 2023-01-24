/* strcpy와 기능이 같은 함수의 구현 */

#include <stdio.h>

char *my_strcpy(char *pd, char *ps);    // return이 주소값이기에 포인터 함수 선언

int main(void)
{
    char str[80] = "strawberry";

    printf("바꾸기 전 문자열 : %s\n", str);
    my_strcpy(str, "apple");
    printf("바꾼 후 문자열 : %s\n", str);
    printf("다른 문자열 대입 : %s\n", my_strcpy(str, "kiwi"));

    return 0;
}

char *my_strcpy(char *pd, char *ps)
{
    char *po = pd;      // 리턴하는 함수로로 쓰기 위해 첫번째 위치를 저장함.

    while(*ps != '\0') {
        *pd = *ps;
        pd++;
        ps++;
    }
    *pd = '\0';

    return po;
}
