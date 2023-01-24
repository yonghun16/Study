#include <stdio.h>

int main() 
{ 
    char a[100]={0, };

    int i;

    scanf("%s",a);

    for(i = 0; i<5; i++) {
        printf("%c",a[i]);
    }

    return 0;
}
