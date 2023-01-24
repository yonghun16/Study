/* 개행 문자로 인해 gets 함수가 입력을 못하는 경우 */

#include <stdio.h>

int main(void)
{
    int age;
    char name[20];

    printf("나이 입력 : ");
    scanf("%d", &age);          // scanf 함수로 나이입력

    printf("이름 입력 : ");
    gets(name);                 // gets 함수로 이름 입력
    printf("나이 : %d, 이름 : %s\n", age, name);

    return 0;
}
