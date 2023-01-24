#include <stdio.h>

int main(int argc, char *argv[])
{
    int n,i;
    scanf("%d", &n);

    int sum = 0;

    for(i=1;sum < n;i+=2){
        sum += i;
    }
    printf("%d %d", i/2, sum);

    /*
    int n, sum=0, i=1;
    scanf("%d", &n);

    while(1) {
        sum += i;
        if(sum >= n){
            printf("%d %d\n", (i/2)+1, sum);
            break;
        }
        i = i+2;
    }
    */
    
    return 0;
}
