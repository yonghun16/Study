/* 선택정렬 */
/* 배열의 값을 오름차순으로정렬 */

#include <stdio.h>

int main(void)
{
    int a[5] = { 3, 2, 1, 6, 5 };
    int i, j, temp;

    for (i = 0; i < 4; i++) {
        for (j = i+1; j < 5; j++) {
           if (a[i] > a[j]) {
               temp = a[i];
               a[i] = a[j];
               a[j] = temp;
           } 
        }
    }

    for (i = 0; i < 5; i++) {
       printf("%5d", a[i]); 
    }

    return 0;
}
