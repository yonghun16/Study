#include <stdio.h>
#include <stdlib.h>

/* 트리 노드 구조 */
typedef struct Node {
    int key;
    struct Node* left;
    struct Node* right;
} Node;

/* 노드를 새로 만들어 반환 */
Node* createNode(int key) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->key = key;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

/* 이진 탐색 트리에 노드 삽입 */
Node* insertNode(Node* root, int key) {
    if (root == NULL) {
        return createNode(key);
    }
    if (key < root->key) {
        root->left = insertNode(root->left, key);
    } else if (key > root->key) {
        root->right = insertNode(root->right, key);
    }
    return root;  // 중복값은 무시
}

/* 중위 순회(오름차순 출력) */
void printTree(Node* root) {
    if (root == NULL) return;
    printTree(root->left);
    printf("%d ", root->key);
    printTree(root->right);
}

int main() {
    Node* root = NULL;

    /* 예시 데이터 삽입 */
    root = insertNode(root, 50);
    root = insertNode(root, 30);
    root = insertNode(root, 70);
    root = insertNode(root, 20);
    root = insertNode(root, 40);

    /* 트리 출력 */
    printf("트리 출력: ");
    printTree(root);
    printf("\n");

    return 0;
}
