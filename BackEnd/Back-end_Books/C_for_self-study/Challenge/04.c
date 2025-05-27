#include <stdio.h>

int main(int argc, char *argv[])
{
    double kg, cm, bmi;

    printf("몸무게(kg)와 키(cm) 입력 : ");
    scanf("%lf%lf", &kg, &cm);

    cm /= 100;
    bmi = kg / (cm*cm);

    ((bmi >= 20) && (bmi < 25))
        ?printf("표준입니다.\n")
        : printf("체중관리가 필요합니다.\n");

    return 0;
}
