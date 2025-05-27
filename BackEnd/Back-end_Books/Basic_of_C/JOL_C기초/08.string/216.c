#include <stdio.h>
#include <string.h>

int main(void)
{
    int i;
    char a[20];
    while(1){
        scanf("%s", a);
        if(strcmp(a, "END")==0)break;
        for(i=strlen(a)-1;i>=0;i--){
            printf("%c", a[i]);
        }
        printf("\n");
    }

    return 0;
}
