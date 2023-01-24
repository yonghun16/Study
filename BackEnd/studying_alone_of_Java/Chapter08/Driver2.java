/* 객체 타입 확인 */

public class Driver2 {
    public void drive(Vehicle2 vehicle2) {
        if(vehicle2 instanceof Bus2) {   //vehicle매개변수 참조하는 객체가 Bus2인지 조사
            Bus2 bus = (Bus2) vehicle2;  //강제타입 변환
            bus.checkFare();
        }
        vehicle2.run();
    }
}
