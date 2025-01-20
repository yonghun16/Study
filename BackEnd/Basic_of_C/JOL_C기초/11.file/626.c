#include <stdio.h>

int main(void)
{
    int a, b;
    int sum=0;

    fscanf(stdin, "%d %d", &a, &b);
    if(a > b) {
        int tmp = a;
        a = b;
        b = tmp;
    }

    for(; a <= b; a++){
        sum += a;
    }

    fprintf(stdout, "%d", sum);

    return 0;
}
