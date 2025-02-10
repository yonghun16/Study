/* 객체 타입 확인 */

public class Driver2Example {
    public static void main(String[] args) {
        Driver2 driver = new Driver2();

        Bus2 bus = new Bus2();
        Taxi2 taxi = new Taxi2();

        driver.drive(bus);
        driver.drive(taxi);
    }
}
