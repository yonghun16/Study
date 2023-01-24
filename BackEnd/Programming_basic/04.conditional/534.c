#include <stdio.h>

int main(void)
{
    char a;
    scanf(" %c", &a);
    switch(a)
    {
        case 'A':
            printf("Excellent");
            break;
        case 'B':
            printf("Good");
            break;
        case 'C':
            printf("Usually");
            break;
        case 'D':
            printf("Effort");
            break;
        case 'F':
            printf("Failure");
            break;
        default:
            printf("error");
    }

    return 0;
}
