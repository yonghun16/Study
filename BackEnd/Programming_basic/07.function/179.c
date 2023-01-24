#include <stdio.h>
#include <math.h>

double fa(double a, double b, double c);
double fb(double a, double b, double c);

int main(int argc, char *argv[])
{
    double a, b, c;
    scanf("%lf %lf %lf", &a, &b, &c);

    printf("%.0lf\n", fa(a, b, c));
    printf("%.0lf\n", fb(a, b, c));

    return 0;
}

double fa(double a, double b, double c)
{
    return round((a+b+c)/3);
}

double fb(double a, double b, double c)
{
    return (round(a) + round(b) + round(c)) / 3;
}

