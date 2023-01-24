/* 헤더 파일의 중복 포함 문제 해결 방법 */
/* Point 구조체 선언 */

#ifndef _POINT_H_   // _POINT_H_ 매크로명이 정의되어 있지 않으면
#define _POINT_H_   // _POINT_H_ 매크로명 정의

typedef struct
{
    int x;          // x좌표
    int y;          // y좌표
} Point;

#endif              // #ifndef _POINT_H_의 끝
