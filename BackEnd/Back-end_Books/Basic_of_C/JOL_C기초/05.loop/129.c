#include <stdio.h>

int main(int argc, char *argv[])
{
    int base, height;
    char answer;
    while(1) {
        printf("Base = ");
        scanf("%d", &base);
        printf("Height = ");
        scanf("%d", &height);
        printf("Triangle width = %.1lf\n", (base*height) / 2.0);
        printf("Continue? ");
        scanf(" %c", &answer);
        if(answer != 'y' && answer != 'Y') break;
    }

    return 0;
}
