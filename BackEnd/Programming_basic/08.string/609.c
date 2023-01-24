#include <stdio.h>
#include <string.h>

int main()
{
    char a[21], b[21], c[21];
    scanf("%s %s %s", a, b, c);
    char tmp[20];

    strcpy(tmp, (strcmp(a, b) < 0 ? a : b));
    printf("%s", strcmp(tmp, c) < 0 ? tmp : c);

    return 0;
}
