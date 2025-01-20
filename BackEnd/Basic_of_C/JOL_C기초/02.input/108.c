#include <stdio.h>

int main(int argc, char *argv[])
{
    int a = 50;    
    double b = 100.12;

    printf("%.2lf * %d = %.0lf\n", b, a, a*b);

    return 0;
}
