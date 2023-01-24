#include <stdio.h>

int main(int argc, char *argv[])
{
    int a[10];
    int i;
    int max = 0;
    int min = 10001;
    for(i=0; i<10; i++){
        scanf("%d", &a[i]);
        if(a[i] >= 100 && min > a[i]){
            min = a[i];
        }
        else if(a[i] < 100 && a[i] > max){
            max = a[i];
        }
    }
    if(max == 0) max = 100;
    else if (min == 10001) min = 100;
    printf("%d %d", max, min);

    return 0;
}
