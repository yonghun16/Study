# 상속1


# 부모 클래스를 선언합니다.
class Parent:
    def __init__(self):
        self.value = "부모 변수"
        print("Parent 클래스의 __init()__ 메소드가 호출되었습니다.")

    def test(self):
        print("Parent 클래스의 test() 메소드입니다.")


# 자식 클래스를 선언합니다.
class Child(Parent):   # 상속
    def __init__(self):
        Parent.__init__(self)
        print("Child 클래스의 __init()__ 메소드가 호출되었습니다.")

    def print_child(self):
        print("자식 메소드")


# 자식 클래스의 인스턴스를 생성하고 부모의 메소드를 호출합니다.
child = Child()
child.test()
print(child.value)    # 부모의 객체 변수 호출
child.print_child()   # 자식 객체의 메소드 호출
