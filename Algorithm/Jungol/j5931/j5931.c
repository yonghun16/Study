// 숫자사각형 4-1
// https://www.jungol.co.kr/problem/5931

#include <stdio.h>

int main(void) {
    int inputVal_a;
    scanf("%d", &inputVal_a);

    for(int i=0; i<inputVal_a; i++) {
        for(int j=0; j<inputVal_a; j++) {
            printf("%d ", i+1);
        }
        printf("\n");
    }

    return 0;
}