#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n;
    scanf("%d", &n);
    double *a = (double*)malloc(sizeof(double)*n);

    int i;
    double sum = 0;

    for(i=0;i<n;i++){
        scanf("%lf", &a[i]);
    }

    for(i=0;i<n;i++){
        printf("%.2lf ", a[i]);
        sum+=a[i];
    }

    printf("\nhap : %.2lf\n", sum);
    printf("avg : %.2lf\n", sum/n);

    return 0;
}
