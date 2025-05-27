#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int num;
    int *ap;
    int i, j;

    printf("> 양수 입력 : ");
    scanf("%d", &num);
    ap = (int *)malloc((num - 1) * sizeof(int));

    if(ap == NULL) {
        printf("메모리 부족...\n");
        exit(1);
    }

    for(i = 0; i < (num - 1); i++) {
        ap[i] = i + 2;
    }
    i = 0;

    while(1) {
        while((ap[i] == 0) && (i < (num - 2))) {
            i++;
        }
        if (i == (num - 2)) break;

        for(j = i + 1; j < (num - 1); j++) {
            if((ap[j] % ap[i]) == 0) {
                ap[j] = 0;
            }
        }
        i++;
    }

    for(i = 0; i < (num - 1); i++) {
        if(ap[i] != 0) {
            printf("%5d", ap[i]);
        }else{
            printf("%5c", 'X');
        }
        if((i + 1) % 5 == 0) {
            printf("\n");
        }
    }

    free(ap);

    return 0;
}
