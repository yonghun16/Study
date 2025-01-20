#include <stdio.h>

struct Student
{
    char name[20];
    char school[20];
    int grade;
};

int main()
{
    struct Student a;
    scanf("%s %s %d", a.name, a.school, &a.grade);
    printf("Name : %s\n", a.name);
    printf("School : %s\n", a.school);
    printf("Grade : %d", a.grade);

    return 0;
}
