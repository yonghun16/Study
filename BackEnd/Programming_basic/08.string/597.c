#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char st1[100];
    char st2[100];

    scanf("%s", st1);
    scanf("%s", st2);

    printf("%lu\n", strlen(st1)+strlen(st2));

    return 0;
}
