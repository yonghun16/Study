/* 변수 사용 */

public class VariableUseExample {
    public static void main(String[] args) {
        int hour = 3;
        int minute = 5;
        System.out.println(hour + "시간" + minute + "분");

        int totalMinute = (hour * 6) + minute;
        System.out.println("총 " + totalMinute + "분");
    }
}
