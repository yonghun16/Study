/* 다른 생성자를 호출해서 중복 코드 줄이기 */

public class CarThis {
    //필드
    String company = "현대자동차";
    String model;
    String color;
    int maxSpeed;

    //생성자
    CarThis() {
    }

    CarThis(String model) {
        this(model, "은색", 250);
    }

    CarThis(String model, String color) {
        this(model, color, 250);
    }

    CarThis(String model, String color, int maxSpeed){
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
