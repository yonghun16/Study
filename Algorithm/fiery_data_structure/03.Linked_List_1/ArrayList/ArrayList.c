#include "ArrayList.h"

#include <stdio.h>

// 배열 기반 리스트 초기화
void ListInit(List* plist) {
    (plist->numOfData) = 0;     // 초기화 0개 데이
    (plist->curPosition) = -1;  // -1은 아무런 위치도 참조하지 않았음을 의미.
}

// 배열 기반 리스트의 삽입.
void LInsert(List* plist, LData data) {
    if (plist->numOfData > LIST_LEN) {  // 더 이상 저장할 공간이 없다면,
        puts("저장이 불가능합니다.");
        return;
    }

    plist->arr[plist->numOfData] = data;  // 데이터 저장.
    (plist->numOfData)++;                 // 저장된 데이터의 수 증가.
}

// 배열 기반 리스트의 조회.
int LFirst(List* plist, LData* pdata) {
    if (plist->numOfData == 0)  // 저장된 데이터가 하나도 없다면,
        return FALSE;

    (plist->curPosition) = 0;  // 참조 위치 초기화! 처 번째 데이터의 참조를 의미!
    *pdata = plist->arr[0];    // pdata가 가리키는 공간에 첫 번째 데이터 저장
    return TRUE;
}

int LNext(List* plist, LData* pdata) {                 // 만약에 중간 지점에서 다시 처음부터 참조하기 원한다면? -> 그 다음 데이터 참조
    if (plist->curPosition >= (plist->numOfData) - 1)  // 더 이상 참조할 데이터가 없다면?
        return FALSE;

    (plist->curPosition)++;
    *pdata = plist->arr[plist->curPosition];  // 값의 반환은 매개변수를 통해서!
    return TRUE;                              // 함수의 반환은 성공여부를 알리기 위해서!
}

// 배열 기반 리스트의 삭제
// (삭제되는 데이터는 반환의 과정을 통해서 되돌려주는 것이 옳다!)
LData LRemove(List* plist) {
    int rpos = plist->curPosition;  // 삭제할 데이터의 인덱스 값 참조
    int num = plist->numOfData;
    int i;
    LData rdata = plist->arr[rpos];  // 삭제할 데이터를 임시로 저장

    for (i = rpos; i < num - 1; i++) {
        plist->arr[i] = plist->arr[i + 1];
    }

    (plist->numOfData)--;    // 데이터의 수 감소
    (plist->curPosition)--;  // 참조위치를 하나 되돌린다. (중요)
    return rdata;            // 삭제된 데이터의 반화
}

// 배열 기반 리스트의 데이터의 개수
int LCount(List* plist) { return plist->numOfData; }
