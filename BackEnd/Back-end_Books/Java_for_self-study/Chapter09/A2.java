/* 바깥 필드와 메소드에서 사용 제한 */

public class A2 {
    //인스턴스 필드
    B field1 = new B();
    C field2 = new C();

    //인스턴스 메소드
    void method1() {
        B var1 = new B();
        C var2 = new C();
    }

    //정적 필드
    //static B field3 = new B();
    static C field4 = new C();

    //정적 메소드
    static void method2() {    //static
        //B var1 = new B();    //non-static
        C var2 = new C();      //static
    }
    
    //인스턴스 멤버 클래스
    class B {}

    //정적 멤버 클래스
    static class C {}
}
