#include <stdio.h>

int main(int argc, char *argv[])
{
    int a;
    printf("Number? ");
    scanf("%d", &a);

    switch (a) {
        case 1:
            printf("dog");
            break;
        case 2:
            printf("cat");
            break;
        case 3:
            printf("chick");
            break;
        default:
            printf("I don't know.");

    }

    return 0;
}
