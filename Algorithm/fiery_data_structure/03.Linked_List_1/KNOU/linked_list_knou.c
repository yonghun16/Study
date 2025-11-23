/* ------------------------------------------------------------
 * File     : linked_list_knou.c
 * Brief    : 단순 연결 리스트(방통대)
 * Author   : 송용훈
 * Date     : 2025-11-23
 * Version  :
 * History
 * ------------------------------------------------------------ */

#include <stdio.h>
#include <stdlib.h>

// 단순 연결 리스트의 노드 구조 정의
typedef struct ListNode {
    int data;
    struct ListNode* link;
} listNode;

// 리스트의 헤드(first) 노드 구조 정의
typedef struct {
    listNode* head;
} linkedList_h;

// 연결리스트 생성
linkedList_h* createList() {
    linkedList_h* H;
    H = (linkedList_h*)malloc(sizeof(linkedList_h));
    H->head = NULL;
    return H;
}

// 노드 추가
void addNode(linkedList_h* H, int x) {
    // 리스트 마지막 노드에 삽입 연산하며, x값은 100이라고 가정
    listNode* NewNode;
    listNode* LastNode;
    NewNode = (listNode*)malloc(sizeof(listNode));
    NewNode->data = x;
    NewNode->link = NULL;

    // 현재 리스트가 공백인 경우
    if (H->head == NULL) {
        H->head = NewNode;
        return;
    }

    // 현재 리스트에 노드가 있는 경우(마지막 노드 찾기)
    LastNode = H->head;
    while (LastNode->link != NULL) {
        LastNode = LastNode->link;
    }
    LastNode->link = NewNode;
}

// 연결리스트의 특정 노드 뒤에 새 노드의 삽입 연산
void additNode(linkedList_h* H, listNode* prevNode, int itdata) {
    // 리스트 중간에 노드를 삽입하는 연산하며, itdata값은 150이라고 가정함
    listNode* NewNode;
    NewNode = (listNode*)malloc(sizeof(listNode));
    NewNode->data = itdata;
    NewNode->link = NULL;

    NewNode->link = prevNode->link;
    prevNode->link = NewNode;
}

// 연결 리스트의 마지막 노드 삭제
void deleteNode(linkedList_h* H) {
    // 리스트 마지막 노드 삭제
    listNode* prevNode;
    listNode* delNode;
    if (H->head == NULL) {
        return;
    }
    if (H->head->link == NULL) {
        free(H->head);
        H->head = NULL;
        return;
    } else {
        prevNode = H->head;
        delNode = H->head->link;
        while (delNode->link != NULL) {
            prevNode = delNode;
            delNode = delNode->link;
        }
        free(delNode);
        prevNode->link = NULL;
    }
}

void deleteitNode(linkedList_h* H, listNode* prevNode, listNode* delNode) {
    prevNode->link = delNode->link;
    free(delNode);
}

// 연결리스트의 특정 노드 삭제
void findandDeleteNode(linkedList_h* H, int itdata) {
    listNode* prevNode = NULL;
    listNode* delNode = H->head;

    while (delNode != NULL) {
        if (delNode->data == itdata) {
            if (prevNode == NULL) {
                // 삭제할 노드가 head인 경우
                H->head = delNode->link;
                free(delNode);
            } else {
                deleteitNode(H, prevNode, delNode);
            }
            return;
        } else {
            prevNode = delNode;
            delNode = delNode->link;
        }
    }
}

// 연결 리스트 출력 함수
void printList(linkedList_h* H) {
    listNode* cur = H->head;
    printf("현재 리스트: ");
    while (cur != NULL) {
        printf("%d -> ", cur->data);
        cur = cur->link;
    }
    printf("NULL\n");
}

int main() {
    linkedList_h* H = createList();
    addNode(H, 100);
    addNode(H, 200);
    addNode(H, 300);
    printList(H);  // 현재 리스트 출력

    additNode(H, H->head->link, 150);
    printList(H);  // 삽입 후 출력

    deleteNode(H);
    printList(H);  // 마지막 노드 삭제 후 출력

    findandDeleteNode(H, 150);
    printList(H);  // 특정 노드 삭제 후 출력

    return 0;
}
