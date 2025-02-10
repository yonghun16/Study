/* User2 스레드 */

public class User2 extends Thread {
    private Calculator calculator;

    public void setCalculator(Calculator calculator) {
        this.setName("User2");          //스레드 이름을 user2로 설정
        this.calculator = calculator;   //공유 객체인 calculator를 필드에 저장
    }

    public void run() {
        calculator.setMemory(50);
    }
}
