#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, i, j;
    int c=1;

    scanf("%d", &a);

    for(i=0; i<a; i++){
        for(j=0;j<i;j++){
            printf("  ");
        }
        for(j=0; j<=a-i-1; j++){
            printf("%d ",c++);
        }
        printf("\n");
    }
}
