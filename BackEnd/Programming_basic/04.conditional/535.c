#include <stdio.h>

int main(int argc, char *argv[])
{
    double score;
    scanf("%lf", &score);

    switch ((int)score){
        case 4 :
            printf("scholarship\n");
            break;
        case 3 :
            printf("next semester\n");
            break;
        case 2 :
            printf("seasonal semester\n");
            break;
        default :
            printf("retake\n");
    }
    return 0;
}
