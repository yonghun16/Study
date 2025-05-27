/* strlen 함수와 기능이 같은 함수 */

#include <stdio.h>

int my_strlen(char *ps);

int main(void)
{
    char str1[80], str2[80];
    char *resp;

    printf("2개의 과일 이름 입력 : ");
    scanf("%s%s", str1, str2);
    if (my_strlen(str1) > my_strlen(str2))
        resp = str1;
    else
        resp = str2;
    printf("이름이 긴 과일은 : %s\n", resp);

    return 0;
}

int my_strlen(char *ps)
{
    int cnt = 0;
    while(*ps != '\0')
    {
        cnt++;
        ps++;
    }

    return cnt;
}
