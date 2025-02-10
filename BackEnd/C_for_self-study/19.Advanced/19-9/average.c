/* 전역 변수에 extern과 static을 사용한 프로그램 */
/* average 함수 정의 */

extern int count;                   // main.c의 전역 변수 count 공유
extern int total;                   // input.c의 전역 변수total 공유

double average(void)
{
    return total / (double)count;   // 입력 값의 평균 반환
}
