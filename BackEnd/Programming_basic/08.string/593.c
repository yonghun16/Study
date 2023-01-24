#include <stdio.h>

int main(void)
{
    int num=0;
    while(1){
        printf("ASCII code =? ");
        scanf("%d",&num);
        if(num >= 33 && num <= 127){
            printf("%c\n", num);
        }
        else { 
            break;
        }
    }
    return 0;
}
