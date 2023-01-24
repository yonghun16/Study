#include <stdio.h>
#include <string.h>

int main(void)
{
    int n;
    scanf("%d", &n);
    int i, j;
    char a[n][100], tmp[100];
    for(i=0; i<n; i++){
        scanf("%s", a[i]);
    }
    for(i=0; i<n-1; i++){
        for(j=i+1; j<n; j++){
            if(strcmp(a[i], a[j])>0){
                strcpy(tmp, a[i]);
                strcpy(a[i], a[j]);
                strcpy(a[j], tmp);
            }
        }
    }
    for(i=0;i<n;i++){
        printf("%s\n", a[i]);
    }

    return 0;
}
