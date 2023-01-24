#include <stdio.h>

int main(int argc, char *argv[])
{
    int kor, eng, math, com, sum;
    scanf("%d %d %d %d", &kor, &eng, &math, &com);

    sum = kor + eng + math + com;

    printf("sum %d\n", sum);
    printf("avg %d\n", sum/4);

    return 0;
}
