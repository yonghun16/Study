#include <stdio.h>

int main(void)
{
    int n;
    fscanf(stdin, "%d", &n);
    if(n!=0) {
        for(int i=n-1; i >= 1; i--){
            n *= i;
        }
    }
    else{
        n = 1;
    }
    fprintf(stdout, "%d", n);

    return 0;
}
