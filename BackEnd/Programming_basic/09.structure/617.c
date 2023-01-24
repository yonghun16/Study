#include <stdio.h>

typedef struct
{
    char name[20];
    int height;
}Person;

int main(void)
{
    Person p[5];

    int i, j;
    int min = 300;
    for(i=0; i<5; i++){
        scanf("%s %d", p[i].name, &p[i].height);
        if(p[i].height < min){
            min = p[i].height;
            j = i;
        }
    }
    printf("%s %d", p[j].name, p[j].height);

    return 0;
}
