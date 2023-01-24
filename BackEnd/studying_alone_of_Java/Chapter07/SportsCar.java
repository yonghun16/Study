/* 재정의할 수 없는 final 메소드 */

public class SportsCar extends Car {
    @Override
    public void speedUp() { speed += 10; }

    @Override
    public void stop() {  // override 할 수 없다며 에러문 발생
        System.out.println("스포츠카를 멈춤");    
        speed = 0;
    }
}
