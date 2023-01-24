/* 문자열 출력하기 */

import java.io.FileWriter;
import java.io.Writer;

public class WriteExample7 {
    public static void main(String[] args) throws Exception {
        Writer writer = new FileWriter("test10.txt");

        String str = "ABC";
        String str2 = "ABCDEFGHIJK";

        writer.write(str);          //문자열 전체를 출력
        writer.write("\n");
        writer.write(str2, 1, 5);   //문자열 일부를 출력

        writer.flush();             //출력 버퍼에 잔류하는 모든 문자열을 출격
        writer.close();             //출력 스트림을 닫음
    }
}
