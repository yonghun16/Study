/* 인스턴스 멤버와 this */

public class Car4Example {
    public static void main(String[] args) {
        Car4 myCar = new Car4("포르쉐");
        Car4 yourCar = new Car4("벤츠");

        myCar.run();
        yourCar.run();
    }
}
