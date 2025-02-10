/* 헤더 파일의 중복 포함 문제 해결 방법 */
/* Line 구조체 선언 */

#include "point.h"      // Point 구조체를 위해 포함

typedef struct
{
    Point first;        // 첫 번째 점
    Point second;       // 두 번째 점
} Line;
