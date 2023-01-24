#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void) 
{
    srand(time(NULL));
    int num = rand() % 100 + 1;     // 1 ~ 100 사이의 숫자
    //printf("숫자 : %d\n", num);

    int answer = 0;     //정답
    int chance = 5;     //기회

    while( chance > 0) {
        printf("남은 기회 %d 번\n", chance--);
        printf("숫자를 맞혀보세요 (1~100) : ");
        scanf("%d", &answer);

        if(answer > num) {
            printf("\nDOWN!! \n\n");
        }
        else if (answer < num) {
            printf("\nUP!! \n\n");
        }
        else if (answer == num) {
            printf("\n!! 정답입니다.!! \n");
            printf("게임을 종료합니다..\n");
            break;
        }
        else {
            printf("알 수 없는 오류가 발생하였어요 \n\n");
        }

        if (chance == 0) {
            printf("모든 기회를 다 소진 하였습니다.\n");
            printf("게임을 종료합니다..\n");
            break;
        }
    }
    return 0;
}
