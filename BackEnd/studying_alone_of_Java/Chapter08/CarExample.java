/* 필드 다형성 테스트 */

public class CarExample {
    public static void main(String[] args) {
        Car myCar = new Car();

        myCar.run();
        System.out.println();

        myCar.frontLeftTire = new KumhoTire();
        myCar.frontRightTire = new KumhoTire();

        myCar.run();
    }
}
