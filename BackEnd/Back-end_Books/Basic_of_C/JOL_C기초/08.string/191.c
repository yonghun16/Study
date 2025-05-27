#include <stdio.h>
#include <string.h>

int main(void)
{
    char a[50][100];
    int i, j;
    for(i=0; i<50; i++){
        scanf("%s", a[i]);
        if(strcmp(a[i], "0")==0) break;
    }
    printf("%d\n", i);
    for(j=0; j<=i-1; j+=2){
        printf("%s\n", a[j]);
    }

    return 0;
}
