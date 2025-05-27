/* char 타입의 switch문 */

public class SwitchCharExample {
    public static void main(String[] args) {
        char grade = 'B';
        
        switch(grade) {
            case 'A':
            case 'B':
                System.out.println("우수 회원입니다.");
                break;
            case 'b':
                System.out.println("일반 회원입니다.");
                break;
            default:
                System.out.println("손님입니다.");
        }
    }
}
