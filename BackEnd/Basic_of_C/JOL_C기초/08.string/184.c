#include <stdio.h> 
#include <string.h> 

int main() { 
    char a[100]={0, }; 
    int i;

    scanf("%s", a);

    for(i = 0; i<strlen(a); i++) {
        if(a[i] >=65 && a[i] <=90) printf("%c",a[i]+32);
        else if(a[i] >=97 && a[i] <= 122) printf("%c",a[i]);
        else if(a[i] >=48 && a[i] <=57) printf("%c",a[i]);
    } 

    return 0;
}
