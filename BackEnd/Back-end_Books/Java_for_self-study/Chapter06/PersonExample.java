/* final 필드 테스트 */

public class PersonExample {
    public static void main(String[] args) {
        Person p1 = new Person("123456-1234567", "홍길동");

        System.out.println(p1.nation);
        System.out.println(p1.ssn);
        System.out.println(p1.name);

        //p1.nation = "usa";
        //p1.ssn = "654331-6543221";
        p1.name = "홍삼원";
    }
}
