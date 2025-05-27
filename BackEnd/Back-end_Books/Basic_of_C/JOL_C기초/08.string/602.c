#include <stdio.h>

int main(void)
{
    char a[5][30];
    int i;

    for(i=0; i<5; i++){
        scanf("%s", a[i]);
    }

    for(i=4; i>=0; i--){
        printf("%s\n", a[i]);
    }

    return 0;
}
