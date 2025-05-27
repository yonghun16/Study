#include <stdio.h>

int main(int argc, char *argv[])
{
    int n, sum = 0, count = 0;
    while (1) {
        scanf("%d", &n);
        sum += n;
        count++;
        if(n>=100) {
            printf("%d\n", sum);
            printf("%.1lf\n", (double)sum/count);
            break;
        }
    }
    return 0;
}
