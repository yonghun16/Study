#include <stdio.h>
#include <string.h>

typedef struct
{
    char name[20];
    int height;
    float weight;
}Person;

int main()
{
    Person p[5];

    int i, j;

    for(i=0; i<5; i++){
        scanf("%s %d %f", p[i].name, &p[i].height, &p[i].weight);
    }

    for(i=0; i<4; i++){
        for(j=i+1; j<5; j++){
            if(strcmp(p[i].name, p[j].name) > 0)
            {
                Person tmp = p[i];
                p[i] = p[j];
                p[j] = tmp;
            }
        }
    }

    printf("name\n");
    for(i=0; i<5; i++){
        printf("%s %d %.1f\n", p[i].name, p[i].height, p[i].weight);
    }

    for(i=0; i<4; i++){
        for(j=i+1; j<5; j++){
            if(p[i].weight < p[j].weight)
            {
                Person tmp = p[i];
                p[i] = p[j];
                p[j] = tmp;
            }
        }
    }

    printf("\nweight\n");
    for(i=0; i<5; i++){
        printf("%s %d %.1f\n", p[i].name, p[i].height, p[i].weight);
    }

    return 0;
}
