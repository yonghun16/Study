/* Getter와 Setter 메소드 사용 */

public class Car5Example {
    public static void main(String[] args) {
        Car5 myCar = new Car5();

        //잘못된 속도 변경
        myCar.setSpeed(-50);

        System.out.println("현재속도: " + myCar.getSpeed());
        //올바른 속도 변경
        myCar.setSpeed(60);

        //멈춤
        if(!myCar.isStop()) {
            myCar.setStop(true);
        }

        System.out.println("현재속도: " + myCar.getSpeed());
    }
}
