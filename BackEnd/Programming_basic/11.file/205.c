#include <stdio.h>

int main(void)
{
    double a,b;
    fscanf(stdin, "%lf %lf", &a, &b);
    
    double sum = a+b;
    fprintf(stdout, "%.2lf %.2lf %.2lf", a, b, sum);

    return 0;
}
