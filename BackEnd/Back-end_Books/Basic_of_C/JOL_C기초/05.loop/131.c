#include <stdio.h>

int main(int argc, char *argv[])
{
    int a, b, temp;;
    scanf("%d %d", &a, &b);
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    for(; a <= b; a++) {
        printf("%d ", a);
    }

    return 0;
}
