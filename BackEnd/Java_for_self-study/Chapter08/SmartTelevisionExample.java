/* 인터페이스 변수에 구현 객체 대입 */

public class SmartTelevisionExample {
    public static void main(String[] args) {
        SmartTelevision tv = new SmartTelevision();

        RemoteControl rc = tv;
        Searchable searchable = tv;
    }
}
