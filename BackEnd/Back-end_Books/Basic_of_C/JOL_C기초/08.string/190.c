#include <stdio.h>

int main(void)
{
    char a[5][20] = {"flower", "rose", "lily", "daffodil", "azalea"};
    int i;
    int num = 0;
    char mark;

    scanf(" %c", &mark);

    for(i=0;i<5;i++){
        if(a[i][1] == mark || a[i][2] == mark){
            printf("%s\n", a[i]);
            num++;
        }
    }
    printf("%d", num);

    return 0;
}
