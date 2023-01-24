#include <stdio.h>
#include <string.h>

int main()
{ 
    char a[100];
    int num=0, b=1, i, j;

    fgets(a, 100, stdin);
    for(i = 0; i<strlen(a); i++) {
        if(a[i] == ' ') { 
            printf("%d. ", b);
            for(j = num; j<i; j++) {
                printf("%c",a[j]);
            } 

            num = i+1;
            printf("\n");
            b++; 
        } 
    } 
    printf("%d. ", b);
    for(j = num; j<strlen(a); j++) {
        printf("%c", a[j]);
    } 

    return 0;
}
