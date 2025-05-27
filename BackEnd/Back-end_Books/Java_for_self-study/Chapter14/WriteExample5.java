/* 배열 전체를 출력하기 */

import java.io.FileWriter;
import java.io.Writer;

public class WriteExample5 {
    public static void main(String[] args) throws Exception {
        Writer writer = new FileWriter("test8.txt");

        char[] array = { 'A', 'B', 'C' };
        
        writer.write(array);    //배열의 모든 문자를 출력

        writer.flush();         //출력 버퍼에 잔류하는 모든 문자를 출력
        writer.close();         //출력 스트림을 닫음
    }
}
