/* 구조체 포인터의 사용 */

#include <stdio.h>

struct score    // 구조체 선언
{
    int kor;
    int eng;
    int math;
};

int main(void)
{
    struct score yuni = { 90, 80, 70 };
    struct score *ps = &yuni;

    printf("국어 : %d\n", (*ps).kor);
    printf("영어 : %d\n", ps -> eng);
    printf("수학 : %d\n", ps -> math);

    return 0;
}

