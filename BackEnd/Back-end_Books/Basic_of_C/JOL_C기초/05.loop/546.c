#include <stdio.h>

int main(int argc, char *argv[])
{
    int n, i, sub, sum = 0;
    double avg;
    scanf("%d", &n);
    for(i = 0; i < n; i++) {
        scanf("%d", &sub);
        sum += sub;
    }
    avg = (double)sum/n;
    printf("avg : %.1lf\n", avg);
    if(avg > 80) printf("pass");
    else printf("fail");

    return 0;
}
