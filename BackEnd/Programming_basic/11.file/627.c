#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    double *a = (double *)malloc(sizeof(double)*10);
    double c;

    for (int i = 0; i < 10; i++) {
       fscanf(stdin, "%lf", a+i); 
    }

    c = (*(a+0) + *(a+9))/2;

    fprintf(stdout, "%.1lf", c);
    
    return 0;
}
