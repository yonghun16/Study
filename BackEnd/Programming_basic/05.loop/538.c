#include <stdio.h>

int main(void)
{
    int n;

    do {
        printf("number? ");
        scanf("%d", &n);
        if (n > 0) printf("positive integer\n");
        else if (n < 0) printf("negative number\n");
    } while (n != 0);

    return 0;
}
