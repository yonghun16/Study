#include <stdio.h>

int main(int argc, char *argv[])
{
    int i, n, j;
    scanf("%d",  &n);

    for(i=0; i<n; i++){
        for (j = 0; j < i; j++) {
            printf(" ");
        }
        for (j = 0; j < (n*2-1)-(2*i); j++) {
           printf("*"); 
        }
        printf("\n");
    }
    return 0;
}
