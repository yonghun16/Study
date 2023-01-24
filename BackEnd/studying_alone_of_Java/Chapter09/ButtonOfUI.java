/* UI 클래스 */
public class ButtonOfUI {
    OnClickListener listener;     //인터페이스 타입 필드

    void setOnClickListener(OnClickListener listener) {   //매개변수의 다형성
        this.listener = listener;
    }

    void touch() {
        listener.onClick();     //구현객체의 onClick()메소드 호출
    }

    static interface OnClickListener {      //중첩 인터페이스
        void onClick();
    }
}
