#include <stdio.h>

int main(int argc, char *argv[])
{
    int array[10];
    int i;
    for (i = 0; i < 10; ++i) {
        array[i] = i+1;
        printf("%d ", array[i]);
    }

    return 0;
}
