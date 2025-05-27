#include <stdio.h>

typedef struct Student
{
    char school_name[21];
    int grade;
}Student; 

int main(void)
{ 
    Student a1 = { "Jejuelementary", 6 }; 
    Student a2;

    scanf("%s %d", a2.school_name, &a2.grade);
    printf("%d grade in %s School\n", a1.grade, a1.school_name);
    printf("%d grade in %s School", a2.grade, a2.school_name);

    return 0; 
}
