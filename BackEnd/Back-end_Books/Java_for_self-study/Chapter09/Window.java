/* UI 클래스 */

public class Window {
    ButtonOfUI button1 = new ButtonOfUI();
    ButtonOfUI button2 = new ButtonOfUI();

    //필드 초기값으로 대입
    ButtonOfUI.OnClickListener listener = new ButtonOfUI.OnClickListener() {
        @Override
        public void onClick() {
            System.out.println("전화를 겁니다.");
        }
    };

    Window() {
        button1.setOnClickListener(listener);
        button2.setOnClickListener(new ButtonOfUI.OnClickListener() {
            @Override
            public void onClick() {
                System.out.println("메시지를 보냅니다.");
            }
        });
    }
}
