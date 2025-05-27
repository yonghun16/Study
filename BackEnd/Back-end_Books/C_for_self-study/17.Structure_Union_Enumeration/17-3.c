/* 다른 구조체를 멤버로 갖는 구조체 사용 */

#include <stdio.h>

struct profile
{
    int age;        // 나이
    double height;  // 키
};

struct student
{
    struct profile pf;
    int id;
    double grade;
};

int main(void)
{
    struct student yuni;

    yuni.pf.age = 17;
    yuni.pf.height = 164.5;
    yuni.id = 315;
    yuni.grade = 4.3;

    printf("나이 : %d\n", yuni.pf.age);         // pf 멤버의 age 멤버 출력
    printf("키   : %.1lf\n", yuni.pf.height);   // pf 멤버의 height 멤버 출력
    printf("학번 : %d\n", yuni.id);             // id 멤버 출력
    printf("학점 : %.1lf\n", yuni.grade);       // grade 멤버 출력
}
