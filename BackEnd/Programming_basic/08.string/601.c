#include <stdio.h>
#include <string.h>

int main()
{ 
    char ch[100];
    int i, j;
    char c;

    scanf("%s",ch);

    for(i = 0; i<strlen(ch); i++) { 
        c = ch[strlen(ch)-1];
        for(j = strlen(ch)-1; j>=0; j--) { 
            ch[j] = ch[j-1]; 
        } 
        ch[0] = c; 
        printf("%s\n",ch); 
    } 

    return 0;
}

