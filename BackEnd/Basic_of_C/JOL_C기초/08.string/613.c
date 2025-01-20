#include <stdio.h>
#include <string.h>

int main(void)
{
    int a[5];
    int i;

    for(i=0;i<5;i++){
        scanf("%d", &a[i]);
    }

    char tmp[100];
    sprintf(tmp, "%d%d%d%d%d", a[0], a[1], a[2], a[3], a[4]);

    for(i=0;i<strlen(tmp);i++){
        printf("%c", tmp[i]);
        if((i+1)%3==0) printf("\n");
    }

    return 0;
}
