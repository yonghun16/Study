/* strcat, strncat 함수와 기능이 같은 함수 구현 */ 

#include <stdio.h>

char *my_strcat(char *pd, char *ps);
char *my_strncat(char *pd, char *ps, int pn);

int main(void)
{
    char str[80] = "straw";     // 문자열 초기화

    my_strcat(str, "berry");    // str 배열에 문자열 붙이기
    printf("%s\n", str);
    my_strncat(str, "piece", 3);   // str 배열에 3개의 문자 붙이기
    printf("%s\n", str);

    return 0;
}

char *my_strcat(char *pd, char *ps)
{
    char *po = pd;      // 배열의 처음 위치 보관

    while (*pd != '\0') {
        pd++;
    }
    while (*ps != '\0') {
        *pd = *ps;
        pd++;
        ps++;
    }
    *pd = '\0';

    return po;
}

char *my_strncat(char *pd, char *ps, int pn)
{
    char *po = pd;      // 배열의 처음 위치 보관

    while (*pd != '\0') {
        pd++;
    }
    for (int i=0; i<pn; i++)
    {
        *pd = *ps;
        pd++;
        ps++;
    }
    *pd = '\0';

    return po;
}
