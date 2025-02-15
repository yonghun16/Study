class Node:
    """연결 리스트의 노드 클래스"""
    def __init__(self, data: int):
        self.data = data
        self.next: Node | None = None

class LinkedList:
    """단일 연결 리스트 클래스"""
    def __init__(self):
        self.head = None  # 첫 번째 노드 (head)

    def append(self, data):
        """연결 리스트 끝에 노드 추가"""
        new_node = Node(data)
        if not self.head:  # 리스트가 비어 있을 때
            self.head = new_node    
            return
        
        current = self.head
        while current.next:
            current = current.next  # 마지막 노드 찾기
        current.next = new_node  # 마지막 노드의 next를 새로운 노드로 설정

    def insert(self, index: int, data: int):
        """연결 리스트 중간에 노드 삽입"""
        new_node = Node(data)

        # 맨 앞에 삽입할 경우 (head 변경)
        if index == 0:
            new_node.next = self.head
            self.head = new_node
            return

        current = self.head
        prev = None
        count = 0

        # 삽입할 위치까지 이동
        while current and count < index:
            prev = current
            current = current.next
            count += 1

        # 중간에 삽입
        if prev:
            prev.next = new_node
            new_node.next = current

    def delete(self, data):
        """특정 값을 가진 노드 삭제"""
        current = self.head
        prev = None
        
        while current and current.data != data:
            prev = current
            current = current.next

        if not current:  # 삭제할 노드가 없을 경우
            print(f"{data} 값이 리스트에 없습니다.")
            return

        if not prev:  # 삭제할 노드가 head 노드일 경우
            self.head = current.next
        else:
            prev.next = current.next  # 이전 노드가 삭제할 노드의 다음 노드를 가리키도록 설정

    def display(self):
        """연결 리스트 출력"""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# 실행 예제
linked_list = LinkedList()
linked_list.append(10)
linked_list.append(30)
linked_list.append(40)

print("초기 리스트:")
linked_list.display()

print("\n인덱스 1에 20 삽입 후:")
linked_list.insert(1, 20)
linked_list.display()

print("\n인덱스 0에 5 삽입 후:")
linked_list.insert(0, 5)
linked_list.display()

print("\n인덱스 100에 50 삽입 (리스트 끝에 추가됨):")
linked_list.insert(100, 50)
linked_list.display()
