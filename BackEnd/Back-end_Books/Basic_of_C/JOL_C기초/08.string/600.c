#include <stdio.h> 
#include <string.h>

int main() { 
    char ch[100];
    int i,j=1;

    fgets(ch,100,stdin);

    for(i = 0; i<strlen(ch); i++) { 
        if(ch[i]==' ') j++;
    } 
    printf("%d", j); 

    return 0; 
}

