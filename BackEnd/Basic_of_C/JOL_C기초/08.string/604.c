#include <stdio.h>
#include <string.h>

int main(void)
{
    char mark;
    char string[20][20];

    int i;
    for(i=0;i<10;i++){
        scanf("%s", string[i]);
    }

    scanf(" %c", &mark);
    for(i=0;i<10;i++){
        if(string[i][strlen(string[i])-1]==mark) printf("%s\n", string[i]);
    }

    return 0;
}
