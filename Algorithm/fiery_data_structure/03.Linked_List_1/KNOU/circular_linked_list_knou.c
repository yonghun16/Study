/* ------------------------------------------------------------
 * File     : circular_linked_list.c
 * Brief    : 원형 연결 리스트 (방통대)
 * Author   : 송용훈
 * Date     : 2025-11-23
 * Version  :
 * History
 * ------------------------------------------------------------ */

#include <stdio.h>
#include <stdlib.h>

// 원형 연결 리스트의 노드 구조 정의.
typedef struct ListNode {
    int data;
    struct ListNode* link;
} listNode;

// 원형 연결 리스트의 'head 노드' 구조 정의.
typedef struct {
    listNode* head;
} linkedList_h;

// 원형 연결 리스트의 '헤드 노드' 생성.
// (head 노드만 1개 있으면 기본 연결 리스트 생성됨.)
linkedList_h* createLinkedList_h(void) {
    linkedList_h* H;
    H = (linkedList_h*)malloc(sizeof(linkedList_h));
    H->head = NULL;
    return H;
}

// 원형 연결 리스트의 첫 번째에 노드 삽입.
void addFirstNode(linkedList_h* H, int x) {
    listNode* tempNode;
    listNode* NewNode;
    NewNode = (listNode*)malloc(sizeof(listNode));
    NewNode->data = x;
    NewNode->link = NULL;

    if (H->head == NULL) {  // 현재 원형 연결 리스트가 공백인 경우.
        H->head = NewNode;
        NewNode->link = NewNode;
        return;
    } else {  // 현재 원형 연결 리스트에 노드가 있는 경우.
        // 원형 리스트는 마지막 노드가 head를 가리키므로 head에서 시작하여 "tempNode->link != H->head"로 검사.
        tempNode = H->head;
        while (tempNode->link != H->head) {
            tempNode = tempNode->link;
        }
        NewNode->link = tempNode->link;  // NewNode(첫 번째)가 가리키는 노드가 "이전 첫 번째 노드(즉 두 번째)"로.
        tempNode->link = NewNode;        // tempNode(마지막 노드)가 가리키는 노드를 NewNode(첫 번째) 노드로.
        H->head = NewNode;               // 원형 연결 리스트의 head를 NewNode(첫 번째) 노드로.
    }
}

// 원형 연결 리스트의 중간 위치(preNode 뒤)에 노드를 삽입.
void addMiddleNode(linkedList_h* H, listNode* prevNode, int itdata) {
    listNode* NewNode;
    NewNode = (listNode*)malloc(sizeof(listNode));
    NewNode->data = itdata;
    NewNode->link = NULL;

    NewNode->link = prevNode->link;
    prevNode->link = NewNode;
    return;
}

// 원형 연결 리스트의 노드삭제.
void deleteCircularNode(linkedList_h* H, listNode* prevNode) {
    listNode* lastNode;
    listNode* delNode;

    // 삭제 대상 노드
    delNode = prevNode->link;

    // 리스트에 노드가 하나뿐인 경우
    if (delNode == prevNode && delNode == H->head) {
        free(delNode);
        H->head = NULL;
        return;
    }

    prevNode->link = delNode->link;

    // 삭제 노드가 head인 경우, head를 다음 노드로 이동
    if (delNode == H->head) {
        H->head = delNode->link;
    }

    free(delNode);
    return;
}

// 원형 연결 리스트의 삭제 노드 탐색.
void finddelCircularNode(linkedList_h* H, int itdata) {
    // 원형 연결 리스트에서 삭제하려는 노드를 탐색하는 연산
    listNode* tempNode;
    listNode* prevNode = NULL;

    if (H->head == NULL) {
        printf("Circular Linked List is EMPTY\n");
        return;
    } else {
        tempNode = H->head;  // 첫 번째 노드부터 검색
        do {
            if (tempNode->data == itdata) {  // 찾는 노드값 검색
                if (prevNode == NULL) {      // 삭제할 노드가 head인 경우
                    // 마지막 노드를 찾아 prevNode로 지정
                    prevNode = H->head;
                    while (prevNode->link != H->head) {
                        prevNode = prevNode->link;
                    }
                }
                deleteCircularNode(H, prevNode);
                // 찾았다면 삭제 함수 호출하며 검색 함수는 끝.
                // (중복된 값이 있다면 첫 번째 중복 노드만 삭제됨.)
                return;
            } else {
                prevNode = tempNode;
                tempNode = tempNode->link;
            }
        } while (tempNode != H->head);
    }
    // 마지막 노드까지 검색했는데 없는 경우
    printf("Search Fail: %d\n", itdata);
    return;
}

// 원형 연결 리스트 출력
void printCircularList(linkedList_h* H) {
    if (H->head == NULL) {
        printf("List is empty\n");
        return;
    }
    listNode* tempNode = H->head;
    do {
        printf("%d -> ", tempNode->data);
        tempNode = tempNode->link;
    } while (tempNode != H->head);
    printf("(head)\n");
}

// main 함수 테스트
int main() {
    linkedList_h* myList = createLinkedList_h();

    printf("Insert nodes at head:\n");
    addFirstNode(myList, 10);
    addFirstNode(myList, 20);
    addFirstNode(myList, 30);
    printCircularList(myList);

    printf("\nDelete node with data 30 (head):\n");
    finddelCircularNode(myList, 30);
    printCircularList(myList);

    printf("\nDelete node with data 10 (tail):\n");
    finddelCircularNode(myList, 10);
    printCircularList(myList);

    printf("\nDelete node with data 20 (last remaining):\n");
    finddelCircularNode(myList, 20);
    printCircularList(myList);

    return 0;
}
