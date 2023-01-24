#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char a[100];
    int num, i, len;

    scanf("%s %d", a, &num);

    len = strlen(a);

    for(i=len-1;i>=len-num && i>=0; i--){
        printf("%c", a[i]);
    }

    return 0;
}
