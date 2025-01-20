#include <stdio.h>

int main(void)
{
    double a[5];
    double *p = a;
    int i;

    for(i=0; i<5; i++){
        scanf("%lf", &p[i]);
    }

    for(i=0; i<5; i++){
        printf("%.1lf ", p[i]);
    }

    return 0;
}
