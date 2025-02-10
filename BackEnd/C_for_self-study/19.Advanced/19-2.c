/* 다양한 매크로명의 사용 */

#include <stdio.h>
#define PI 3.14159
#define LIMIT 100.0           // 상수를 매크로명으로 정의
#define MSG "passed!"         // 문자열을 매크로명으로 정의
#define ERR_PRN printf("허용 범위를 벗어났습니다!\n")   // 출력문을 매크로명으로 정의

int main(void)
{
    double radius, area;            // 반지름과 면적 변수

    printf("반지름을 입력하세요(10 이하) : ");
    scanf("%lf", &radius);          // 반지름 입력
    area = PI * radius * radius;    // 면적계산
    if (area > LIMIT) ERR_PRN;      // 면적이 100을 초과하면 오류 메시지 출력
    else printf("원의 면적 : %.2lf (%s)\n", area, MSG);     // 면적과 메시지 출력

    return 0;
}
