/* typedef를 사용한 자료형 재정의 */

#include <stdio.h>

struct student
{
    int num;
    double grade;
};
typedef struct student Student1;

typedef struct
{
    int num;
    double grade;
} Student2;

void print_data(Student1 *ps);
void print_data2(Student2 *ps);

int main(void)
{
    Student1 s1 = { 315, 4.2 }; 
    Student2 s2 = { 215, 3.5 }; 

    print_data(&s1);
    print_data2(&s2);

    return 0;
}

void print_data(Student1 *ps)
{
    printf("학생1 학번 : %d\n", ps->num);
    printf("학생1 학점 : %.1lf\n", ps->grade);
}

void print_data2(Student2 *ps)
{
    printf("학생2 학번 : %d\n", ps->num);
    printf("학생2 학점 : %.1lf\n", ps->grade);
}
