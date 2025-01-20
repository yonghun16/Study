#include <stdio.h>

typedef struct
{
    int height;
    float weight;
}Data;

int main(void)
{
    Data m, f;
    scanf("%d %f", &m.height, &m.weight);
    scanf("%d %f", &f.height, &f.weight);

    printf("height : %dcm\n", (m.height+f.height)/2+5);
    printf("weight : %.1fkg", (m.weight+f.weight)/2-4.5);

    return 0;
}
