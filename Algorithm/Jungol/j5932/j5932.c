// 숫자사각형 4-2
// https://www.jungol.co.kr/problem/5932

#include <stdio.h>

int main(void) {
    int inputVal;
    scanf("%d", &inputVal);

    for(int i=0; i<inputVal; i++) {
        for(int j=0; j<inputVal; j++) {
            if((i+1)%2 != 0) {
                printf("%d ", j+1);
            }
            else {
                printf("%d ", inputVal-j);
            }
        }
        printf("\n");
    }

    return 0;
}