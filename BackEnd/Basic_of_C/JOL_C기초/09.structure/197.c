#include <stdio.h>

typedef struct
{
    int x;
    int y;
}Pos;

struct Rectangle
{
    Pos up;
    Pos down;
};

int main(void)
{
    struct Rectangle A, B, C;
    scanf("%d %d %d %d", &A.down.x, &A.down.y, &A.up.x, &A.up.y);
    scanf("%d %d %d %d", &B.down.x, &B.down.y, &B.up.x, &B.up.y);

    C.down.x = A.down.x < B.down.x ? A.down.x : B.down.x;
    C.down.y = A.down.y < B.down.y ? A.down.y : B.down.y;
    C.up.x = A.up.x > B.up.x ? A.up.x : B.up.x;
    C.up.y = A.up.y > B.up.y ? A.up.y : B.up.y;

    printf("%d %d %d %d", C.down.x, C.down.y, C.up.x, C.up.y);

    return 0;
}
