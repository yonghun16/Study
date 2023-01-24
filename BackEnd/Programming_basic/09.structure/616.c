#include <stdio.h>

typedef struct
{
    int x;
    int y;
}pos;

struct Triangle
{
    pos a[3];
};

int main(void)
{
    struct Triangle T1;
    int i;
    int x = 0, y = 0;

    for(i=0; i<3; i++){
        scanf("%d %d", &T1.a[i].x, &T1.a[i].y);
        x += T1.a[i].x;
        y += T1.a[i].y;
    }
    printf("(%.1f, %.1f)", x/3.0, y/3.0);

    return 0;
}
