#include <stdio.h>

typedef struct
{
    char name[20];
    char pNum[20];
    char address[20];
}Data;

int main(void)
{
    Data p1;

    scanf("%s %s %s", p1.name, p1.pNum, p1.address);

    printf("name : %s\n", p1.name);
    printf("tel : %s\n", p1.pNum);
    printf("addr : %s", p1.address);

    return 0;
}
