/* 생성자의 오버로딩 */

public class CarOverloading {
    //필드
    String company = "현대자동차";
    String model;
    String color;
    int maxSpeed;

    //생성자1
    CarOverloading() {
    }

    //생성자2
    CarOverloading(String model) {
        this.model = model;
    }

    //생성자3
    CarOverloading(String model, String color) {
        this.model = model;
        this.color = color;
    }

    //생성자4
    CarOverloading(String model, String color, int maxSpeed) {
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
