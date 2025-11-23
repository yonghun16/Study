#ifndef __ARRAY_LIST_H__
#define __ARRAY_LIST_H__

#define TRUE 1
#define FALSE 0

/*** ArrayList의 정의 ****/
#define LIST_LEN 100
typedef int LData;

typedef struct __ArrayList {
    LData arr[LIST_LEN];
    int numOfData;    // 리스트에 저장된 데이터의 개수.
    int curPosition;  // 마지막 참조 위치에 대한 정보 저장.
} ArrayList;

/*** ArrayList와 관련된 연산들 ****/
typedef ArrayList List;

void ListInit(List* plist);  // 리스트 초기화
                             // - 초기화할 리스트의 주소 값을 인자로 전달한다.
                             // - 리스트 생성 후 제일 먼저 호출되어야 하는 함수이다.

void LInsert(List* plist, LData data);  // 리스트에 데이터를 추가
                                        // - 리스트에 데이터를 저장한다.

int LFirst(List* plist, LData* pdata);  // 저장된 데이터의 탐색 및 탐색 초기화
                                        // 첫 번째 데이터가 pdata가 가리키는 메모리에 저장된다.
                                        // - 데이터의 참조를 위한 초기화가 진행된다.
                                        // - 참조 성공시 TREU(1), 실패 시 FALSE(0) 반환.

int LNext(List* plist, LData* pdata);  // 다음 데이터의 참조(반환)을 목적으로 호출.

LData LRemove(List* plist);  // 바로 이전에 참조(반환)된 데이터를 삭제
                             // - 삭제된 데이터는 반환된다.
                             // - 마지막 반환 데이터를 삭제하므로 연이은 반복 호출을 허용하지 않는다.

int LCount(List* plist);  // 현재 저장되어 있는 데이터의 수를 반환

#endif
