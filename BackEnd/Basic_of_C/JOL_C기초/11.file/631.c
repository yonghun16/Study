#include <stdio.h>

int main(void)
{
    double r;
    while(1){
        fscanf(stdin, "%lf", &r);
        if(r == 0) break;
        printf("%.2f\n", r/3.14/2);
    }

    return 0;
}
