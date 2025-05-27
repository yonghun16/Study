/* 학생 3명의 네 과목 총점과 평균을 구하는 프로그램 */

#include <stdio.h>

int main(void)
{
    int score[3][4];                    // 3명의 네 과목 점수를 저장할 2차원 배열 선언
    int total;
    double avg;
    int i, j;

    for (i = 0; i < 3; i++) {           // 학생 수만큼 반복
        printf("4과목의 점수 입력 : ");
        for (j = 0; j < 4; j++) {       // 과목 수만큼 반복
            scanf("%d", &score[i][j]);  // 점수 입력
        }
    }

    for (i = 0; i < 3; i++) {           // 학생 수 만큼 반복
        total = 0;
        for (j = 0; j < 4; j++) {       // 과목 수 만큼 반복
            total += score[i][j];       // 학생별로 총점 누적
        }
        avg = total / 4.0;
        printf("총점 : %d, 평균 : %.2lf\n", total, avg);    // 총점, 평균 출력
    }

    return 0;
}
