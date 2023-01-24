/* 1byte씩 읽기 */

import java.io.FileInputStream;
import java.io.InputStream;

public class ReadExample {
    public static void main(String[] args) throws Exception {
        InputStream is = new FileInputStream("input_test1.db");
        while(true) {
            int data = is.read();        //1byte씩 읽기
            if(data == -1) break;        //파일 끝에 도달했을 경우
            System.out.println(data);
        }
        is.close();         //입력 스트림을 닫음
    }
}
