#include <stdio.h>
#include <string.h>

int main(void)
{
    char a[20];
    scanf("%s", a);

    strcat(a, "fighting");
    printf("%s", a);

    return 0;
}
