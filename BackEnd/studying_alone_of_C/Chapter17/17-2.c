/* 배열과 포인터를 멤버로 갖는 구조체 사용 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct profile
{
    char name[20];      // 이름
    int age;            // 나이
    double height;      // 키
    char *intro;        // 자기소개
};

int main(void)
{
    struct profile yuni;    // prfile 구조체 변수 선언

    strcpy(yuni.name, "서하윤");
    yuni.age = 17;
    yuni.height = 164.5;
    yuni.intro = (char *)malloc(80);
    printf("자기소개 : ");
    gets(yuni.intro);

    printf("이름 : %s\n", yuni.name);
    printf("나이 : %d\n", yuni.age);
    printf("키 : %.1lf\n", yuni.height);
    printf("자기소개 : %s\n", yuni.intro);
    free(yuni.intro);

    return 0;
}
