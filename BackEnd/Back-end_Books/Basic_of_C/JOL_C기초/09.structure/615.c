#include <stdio.h>

struct Student
{
    char name[20];
    int korean;
    int english;
};

int main(void)
{
    struct Student s1;
    struct Student s2;

    scanf("%s%d%d", s1.name, &s1.korean, &s1.english);
    scanf("%s%d%d", s2.name, &s2.korean, &s2.english);

    printf("%s %d %d\n", s1.name, s1.korean, s1.english);
    printf("%s %d %d\n", s2.name, s2.korean, s2.english);
    printf("avg %d %d\n", (s1.korean + s2.korean)/2, (s1.english + s2.english)/2 );

    return 0;
}
