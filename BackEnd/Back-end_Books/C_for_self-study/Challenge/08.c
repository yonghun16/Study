#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[])
{
    char string[200];
    int i, len, count=0;;

    printf("문장 입력 : ");
    fgets(string, sizeof(string), stdin);
    len = strlen(string);

    for(i=0; i<len; i++){
        if(string[i]>='A' && string[i]<='Z' ){
            string[i] -= ('A' + 'a');
            count++;
        }
    }

    printf("바뀐 문장 : %s", string);
    printf("바뀐 문자 수 : %d\n", count);

    return 0;
}
