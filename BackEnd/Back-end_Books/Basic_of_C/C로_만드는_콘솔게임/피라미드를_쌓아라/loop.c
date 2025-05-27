#include <stdio.h>

int main(void) {
    //파라미드를 쌓아라 - 프로젝트
    int floor;
    printf("몇 층으로 쌓겠느냐? ");
    scanf("%d", &floor);

    for(int i=0; i< floor; i++) {
        for(int j=i; j<floor-1; j++) {
            printf(" ");
        }
        for(int k=1; k<=i*2+1; k++) {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}
