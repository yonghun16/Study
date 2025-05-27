#include <stdio.h>
#include <string.h>

int main(void)
{
    char a[100];
    char b[100];

    int lenA = strlen(fgets(a, 100, stdin));
    int lenB = strlen(fgets(b, 100, stdin));

    if(lenA < lenB)
        fprintf(stdout, "%s\n%s", a, b);
    else
        fprintf(stdout, "%s\n%s", b, a);

    return 0;
}
