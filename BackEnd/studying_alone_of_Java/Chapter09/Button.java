/* 중첩 인터페이스 */

public class Button {
    OnClickListener listener;   //인터페이스 타입 필드

    void setOnClickListener(OnClickListener listener) {  //매개변수의 다형성
        this.listener = listener;
    }

    void touch() {
        listener.onClick();
    }

    static interface OnClickListener {
        void onClick();
    }
}
