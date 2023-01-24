#include <stdio.h>

typedef struct
{
    char name[20];
    int a, b, c;
    int sum;
}Data;

int main(void)
{
    int n;
    scanf("%d",&n);

    int i, j;
    Data p[10];

    for(i=0; i<n; i++){
        scanf("%s %d %d %d", p[i].name, &p[i].a, &p[i].b, &p[i].c);
        p[i].sum = p[i].a+p[i].b+p[i].c;
    }

    for(i=0; i<n-1; i++){
        for(j=i+1; j<n; j++){
            if(p[i].sum < p[j].sum){
                Data tmp = p[i];
                p[i] = p[j];
                p[j] = tmp;
            }
        }
    }

    for(i=0; i<n; i++){
        printf("%s %d %d %d %d\n", p[i].name, p[i].a, p[i].b, p[i].c, p[i].sum);
    }

    return 0;
}
