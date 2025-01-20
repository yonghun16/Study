#include <stdio.h>

int main(int argc, char *argv[])
{
    int a;

    scanf("%d", &a);

    printf("%d\n", a);
    if(a < 0){
        printf("minus");    
    }

    return 0;
}
