#include <stdio.h>
#include <string.h>

int main()
{
    char a[100];
    scanf("%s", a);

    if(strstr(a, "c")) printf("Yes ");
    else printf("No ");
    if(strstr(a, "ab")) printf("Yes");
    else printf("No");

    return 0;
}
