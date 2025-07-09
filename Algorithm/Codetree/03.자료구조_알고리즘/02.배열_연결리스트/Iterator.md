# Iterator

- 연결 리스트에서의 Iterator는 리스트의 각 요소(노드)에 순차적으로 접근하기 위한 도구입니다. 배열에서는 인덱스를 통해 직접 접근할 수 있지만, 연결 리스트에서는 노드를 하나하나 따라가야 하므로 Iterator가 순회를 쉽게 만들어줍니다.
- 이터레이터는 리스트 안에서 특정 위치를 기억하는 포인터입니다. 마치 텍스트 에디터에서 깜빡이는 커서처럼, 이터레이터는 “여기!“를 가리킵니다.


## 📌 핵심 요약
| 항목 | 설명 |
|------|------|
| 개념 | 연결 리스트의 각 노드를 차례대로 접근하는 반복자 |
| 사용 목적 | for 루프처럼 노드를 순서대로 순회하기 위해 |
| 작동 방식 | 현재 노드를 기억하고 `next()`로 다음 노드로 이동 |
| 구현 방식 | 언어마다 `iterator`, `__iter__`, `Symbol.iterator` 등 사용 |


| 언어 | 구현 방식 | 특징 |
|------|-----------|------|
| JavaScript | `Symbol.iterator()` | `for...of` 문에 바로 사용 가능 |
| Python | `__iter__`, `__next__` | `for` 루프에 직접 사용 가능 |
| C | 반복자 포인터 사용 | 수동 순회 및 직접 관리 필요 |


## ✅ JavaScript - Symbol.iterator 사용
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  pushBack(data) {
    const newNode = new Node(data);
    if (!this.head) this.head = newNode;
    else {
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = newNode;
    }
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          let value = current.data;
          current = current.next;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

// 사용
const list = new LinkedList();
list.pushBack(1);
list.pushBack(2);
list.pushBack(3);

for (let x of list) {
  console.log(x); // 1, 2, 3
}
```

## ✅ Python - __iter__, __next__ 사용
```Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedListIterator:
    def __init__(self, node):
        self.current = node

    def __iter__(self):
        return self

    def __next__(self):
        if not self.current:
            raise StopIteration
        data = self.current.data
        self.current = self.current.next
        return data

class LinkedList:
    def __init__(self):
        self.head = None

    def push_back(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = new_node

    def __iter__(self):
        return LinkedListIterator(self.head)

# 사용
lst = LinkedList()
lst.push_back(1)
lst.push_back(2)
lst.push_back(3)

for x in lst:
    print(x)  # 1, 2, 3
```


## ✅ C - 사용자 정의 구조체와 반복자 포인터
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct {
    Node* head;
} LinkedList;

void pushBack(LinkedList* list, int data) {
    Node* newNode = malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;

    if (list->head == NULL) {
        list->head = newNode;
    } else {
        Node* cur = list->head;
        while (cur->next != NULL)
            cur = cur->next;
        cur->next = newNode;
    }
}

void iterate(LinkedList* list) {
    Node* cur = list->head;
    while (cur != NULL) {
        printf("%d\n", cur->data);
        cur = cur->next;
    }
}

// 사용
int main() {
    LinkedList list = { NULL };
    pushBack(&list, 1);
    pushBack(&list, 2);
    pushBack(&list, 3);

    iterate(&list);  // 1 2 3
    return 0;
}
```
