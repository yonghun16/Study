#include <stdio.h>
#include <string.h>

int main()
{ 
    char a[100]={0, };
    char n;
    int i,count=0;

    scanf("%s %c",a,&n);

    for(i = 0; i<strlen(a); i++) {
        if(a[i] == n) { 
            printf("%d",i); 
            count = 1;
            break;
        }
    } 

    if(count == 0) printf("No"); 

    return 0;
}
