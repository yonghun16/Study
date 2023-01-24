#include <stdio.h>
#include <string.h>

int main(void)
{
    char a[20], b[20];
    scanf("%s %s", a, b);

    strncpy(b, a, 2);
    strncat(b, a, 2);
    printf("%s", b);

    return 0;
}
