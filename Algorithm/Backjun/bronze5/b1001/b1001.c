// A-B
// https://www.acmicpc.net/problem/1001

#include <stdio.h>

int getSub(int inputVal_a, int inputVal_b);

int main()
{
    int inputVal_a, inputVal_b;
    scanf("%d %d", &inputVal_a, &inputVal_b);
    
    int answer = getSub(inputVal_a, inputVal_b);
    printf("%d", answer);

    return 0;
}

int getSub(int inputVal_a, int inputVal_b) {
    return inputVal_a - inputVal_b;
}