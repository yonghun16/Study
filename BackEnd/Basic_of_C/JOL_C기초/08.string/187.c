#include <stdio.h>
#include <string.h>

int main()
{
    char a[100];
    int i, num;
    scanf("%s", a);

    while(1) { 
        if(strlen(a) == 1)
            break;
        scanf("%d", &num);

        if(strlen(a)>=num) { 
            for(i = num-1; i<strlen(a)+1; i++) { 
                a[i] = a[i+1];
            }
        }
        else a[strlen(a)-1] = 0;
        printf("%s\n", a);
    } 

    return 0;
}
