#include <stdio.h>

int main(int argc, char *argv[])
{
    double a;

    printf("yard? ");
    scanf("%lf", &a);
    printf("%.1lfyard = %.1lfcm\n", a, a*91.44);

    return 0;
}
