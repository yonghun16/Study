/* 객체 생성 후 필드값 출력 */

public class KoreanExample {
    public static void main(String[] args) {
        Korean k1 = new Korean("박자바", "011225-1234567");
        System.out.println("k1.name : " + k1.name);
        System.out.println("k1.son : " + k1.ssn);

        Korean k2 = new Korean("김자바", "930525-0643321");
        System.out.println("k2.name : " + k2.name);
        System.out.println("k2.son : " + k2.ssn);
    }
}
