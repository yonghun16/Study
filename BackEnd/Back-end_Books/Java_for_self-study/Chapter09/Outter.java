/* 로컬 클래스에서 사용 제한 */

public class Outter {
    //자바7 이전
    public void method1(final int arg) {
        final int localVariable = 1;
        //arg = 100;
        //localVariable = 100;
        class Inner {
            public void method() {
                int result = arg + localVariable;
            }
        }
    }

    //자바8 이후
    public void method2(int arg) {  //final 명시 안해도 됨
        int localVariable = 1;      //final 명시 안해도 됨
        //arg = 100;
        //localVariable = 100;
        class Inner {
            public void method() {
                int result = arg + localVariable;
            }
        }
    }
}
