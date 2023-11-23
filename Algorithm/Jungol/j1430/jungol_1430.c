#include <stdio.h>

int main(void)
{
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    long sum = a * b * c;

    int array[10] = { 0, };

    while(1) {
        if (!sum) break;
        array[sum%10]++;
        sum /=10;
    }

    for(int i=0; i<10; i++) {
        printf("%d\n", array[i]);
    }
    return 0;
}