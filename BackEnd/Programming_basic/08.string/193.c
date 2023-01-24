#include <stdio.h>
#include <string.h>

int main()
{
    char markc[2];
    char marks[100];
    char a[5][100];
    int flag = 0;
    int i;

    for(i=0; i<5; i++){
        scanf("%s", a[i]);
    }
    scanf("%s %s", markc, marks);

    for(i=0; i<5; i++){
        if(strstr(a[i], markc) || strstr(a[i], marks)){
            printf("%s\n", a[i]);
            flag = 1;
        }
    }

    if(flag == 0) printf("none");

    return 0;
}
