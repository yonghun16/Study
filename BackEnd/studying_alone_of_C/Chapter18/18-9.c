/* 다양한 자료형을 형식에 맞게 입출력 */

#include <stdio.h>

int main(void)
{
    FILE *ifp, *ofp;            // 파일 포인터 선언
    char name[20];              // 이름
    int kor, eng, math;         // 세 과목 점수
    int total;                  // 총점
    double avg;                 // 평균
    int res;                    // fscanf 함수의 반환값 저장

    ifp = fopen("a.txt", "r");  // 입력 파일을 읽기 전용으로 개방
    if (ifp == NULL) {
        printf("입력 파일을 열지 못했습니다.\n");
        return 1;
    }

    ofp = fopen("b.txt", "w");
    if (ofp == NULL) {
        printf("출력 파일을 열지 못했습니다.\n");
        return 1;
    }

    while (1) {
        res = fscanf(ifp, "%s%d%d%d", name, &kor, &eng, &math);     // 데이터 입력
        if (res == EOF) {
            break;
        }

        total = kor + eng + math;
        avg = total / 3.0;
        fprintf(ofp, "%s%5d%7.1lf\n", name, total, avg);
    }

    fclose(ifp);
    fclose(ofp);

    return 0;
}
