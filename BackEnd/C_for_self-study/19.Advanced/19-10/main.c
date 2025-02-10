/* 헤더 파일의 중복 포함 문제 해결 방법 */
/* Point와 Line 구조체 모두 사용 */

#include <stdio.h>
#include "point.h"          // Point 구조체 선언
#include "line.h"           // Line 구조체 선언

int main(void)
{
    Line a = { {1, 2},  {5, 6} };       // Line 구조체 변수 초기화
    Point b;                            // 가운데 점의 자표 저장

    b.x = (a.first.x + a.second.x) / 2; // 가운데 점의 x좌표 계산
    b.y = (a.first.y + a.second.y) / 2; // 가운데 점의 y좌표 계산
    printf("선의 가운데 점의 좌표 : (%d, %d)\n", b.x, b.y);

    return 0;
}
