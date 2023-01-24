#include <stdio.h>
#include <string.h>

int main(void) 
{
    char a[100] = { 0, };
    char b[100] = { 0, };
    int c = 0;

    scanf("%s%s%d", a, b, &c);
    
    printf("%s\n", strcat(a, b));
    printf("%s\n", strncpy(b, a, c));

    return 0;
}
