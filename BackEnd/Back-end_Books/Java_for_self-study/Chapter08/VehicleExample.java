/* 강제 타입 변환 */

public class VehicleExample {
    public static void main(String[] args) {
        Vehicle2 vehicle = new Bus2();

        vehicle.run();
        //vehicle.checkFare();  <- (x)vehicle인터페이스에는 checkFare()가 없음.

        Bus2 bus = (Bus2) vehicle;   // 강제 타입 변환

        bus.run();
        bus.checkFare();
    }
}
