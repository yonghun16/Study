#include <stdio.h>

int main(int argc, char *argv[])
{
    int arr[30] = {0};
    int i;
    char n;

    for (i = 0; i < 100; i++) {
        scanf(" %c", &n);
        if(n >= 65 && n <= 90) arr[n-65]++;
        else break;
    }

    for (i = 0; i <= 90-65; i++) {
        if(arr[i]) printf("%c : %d\n", i+65, arr[i]);
    }
    return 0;
}
