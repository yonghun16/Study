#include <stdio.h>

int main()
{
    int a, b, i, j;
    scanf("%d %d", &a, &b);
    if(a < b){
        for(i=1;i<=9;i++){
            for(j=a;j<=b;j++){
                printf("%d * %d = %2d   ", j, i, j*i);
            }
            printf("\n");
        }
    }
    else{
        for(i=1;i<=9;i++){
            for(j=a;j>=b;j--){
                printf("%d * %d = %2d   ", j, i, j*i);
            }
            printf("\n");
        }
    }

    return 0; 
}
