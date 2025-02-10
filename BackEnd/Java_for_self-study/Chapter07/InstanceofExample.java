/* 객체 타입 확인 */

public class InstanceofExample {
    public static void method1(Parent2 parent) {
        if (parent instanceof Child2) {     //<- Child 타입으로 변환이 가능한지 확인
            Child2 child = (Child2) parent;
            System.out.println("method1 - Child2로 변환 성공");
        } else {
            System.out.println("method1 - Child2로 변환되지 않음");
        }
    }

    public static void  method2(Parent2 parent) {
        Child2 child = (Child2) parent;     //<- ClassCastException이 발생할 가능성 있음.
        System.out.println("method2 - Child2로 변환 성공");
    }

    public static void main(String[] args) {
        Parent2 parentA = new Child2();  //타입변환
        method1(parentA);   //다시 부모로 강제타입 가능한지 물어보고 변환
        method2(parentA);   //물어보지 않고 변환

        Parent2 parentB = new Parent2();
        method1(parentB);
        method2(parentB);   //예외 발생
    }
}
