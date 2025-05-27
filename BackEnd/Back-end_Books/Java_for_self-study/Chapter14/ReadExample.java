/* 1byte씩 읽기 */

import java.io.FileInputStream;
import java.io.InputStream;

public class ReadExample {
    public static void main(String[] args) throws Exception {
        // 데이터 출발지를 test1.db로 하는 바이트 기반 파일 입력 스트림을 생성
        InputStream is = new FileInputStream("test1.db");
        while(true) {
            int data = is.read();        //1byte씩 읽기
            if(data == -1) break;        //파일 끝에 도달했을 경우
            System.out.println(data);
        }
        is.close();         //입력 스트림을 닫음
    }
}
