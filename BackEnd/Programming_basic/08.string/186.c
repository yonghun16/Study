#include <stdio.h>
#include <string.h> 

int main()
{
    char a[100], b[100];

    scanf("%s %s", a, b);
    if(strlen(a) > strlen(b)) printf("%lu",strlen(a));
    else printf("%lu", strlen(b));

    return 0;
}
