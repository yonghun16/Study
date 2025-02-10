/* 객체 생성 시 생정자 선택 */

public class CarOverExample {
    public static void main(String[] args) {
        CarOverloading car1 = new CarOverloading(); //생성자1 선택
        System.out.println("car1.company : " + car1.company);
        System.out.println();

        CarOverloading car2 = new CarOverloading("자가용"); //생성자2 선택
        System.out.println("car2.company : " + car2.company);
        System.out.println("car2.model : " + car2.model);
        System.out.println();

        CarOverloading car3 = new CarOverloading("업무용", "빨강"); //생성자3 선택
        System.out.println("car3.company : " + car3.company);
        System.out.println("car3.model : " + car3.model);
        System.out.println("car3.color : " + car3.color);
        System.out.println();

        CarOverloading car4 = new CarOverloading("택시", "검정", 200); //생성자4 선택
        System.out.println("car4.company : " + car4.company);
        System.out.println("car4.model : " + car4.model);
        System.out.println("car4.color : " + car4.color);
        System.out.println("car4.maxSpeed : " + car4.maxSpeed);
        System.out.println();
    }
}
