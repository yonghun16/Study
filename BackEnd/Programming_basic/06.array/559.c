#include <stdio.h>

int main(int argc, char *argv[])
{
    double arr[6] = { 85.6, 79.5, 83.1, 80.0, 78.2, 75.0 };
    int i, j;
    scanf("%d %d", &i, &j);

    printf("%.1lf\n", arr[i-1] + arr[j-1]);

    return 0;
}
