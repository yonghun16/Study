#include <stdio.h>

int main(int argc, char *argv[])
{
    int n;
    int flag = 0;
    while (1) {
        printf("1. Korea\n");
        printf("2. USA\n");
        printf("3. Japan\n");
        printf("4. China\n");
        printf("number? ");
        scanf("%d", &n);
        switch (n) {
            case 1 : printf("\nSeoul\n\n"); break;
            case 2 : printf("\nWashington\n\n"); break;
            case 3 : printf("\nTokyo\n\n"); break;
            case 4 : printf("\nBeijing\n\n"); break;
            default : printf("\nnone\n\n"); flag = 1; break;
        }
        if(flag) break;
    }

    return 0;
}
