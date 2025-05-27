#include <stdio.h>

int main(int argc, char *argv[])
{
    int i, j;
    for (i = 1; i <= 5; ++i) {
        for (j = 1; j <= 5; ++j) {
            printf("%d ", i+j);
        }
        printf("\n");
    }
    return 0;
}
