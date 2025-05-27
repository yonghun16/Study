#include <stdio.h>

int main(int argc, char *argv[])
{
    int year;
    scanf("%d", &year);
    switch(year)
    {
        case 2:
            printf("28");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            printf("30");
            break;
        default:
            printf("31");
    }

    return 0;
}
#include <stdio.h>

/*
int main(int argc, char *argv[])
{
    int year;
    scanf("%d", &year);
    switch (year) {
        case 1 : printf("31"); break;
        case 2 : printf("28"); break;
        case 3 : printf("31"); break;
        case 4 : printf("30"); break;
        case 5 : printf("31"); break;
        case 6 : printf("30"); break;
        case 7 : printf("31"); break;
        case 8 : printf("31"); break;
        case 9 : printf("30"); break;
        case 10 : printf("31"); break;
        case 11 : printf("30"); break;
        case 12 : printf("31"); break;
    }
    return 0;
}
*/
