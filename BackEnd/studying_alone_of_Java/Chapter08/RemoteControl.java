/* 상수 필드 선언 */

public interface RemoteControl {
    //상수
    public int MAX_VOLUME = 10;
    public int MIN_VOLUME = 0;

    //추상 메소드
    public void turnOn();       //<- 메소드 선언부만 작성
    public void turnOff();
    public void setVolume(int volume);
}
