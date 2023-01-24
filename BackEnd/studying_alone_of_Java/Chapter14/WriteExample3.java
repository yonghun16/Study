/* 배열 일부를 출력하기 */

import java.io.FileOutputStream;
import java.io.OutputStream;

public class WriteExample3 {
    public static void main(String[] args) throws Exception {
        OutputStream os = new FileOutputStream("test3db");  //바이트 기반 출력 스트림 생성

        byte[] array = { 10, 20, 30, 40, 50 };

        os.write(array, 1, 3);      //배열의 1번 인덱스로부터 3개를 출력

        os.flush();    //출력 버퍼에 잔류하는 모든 바이트를 출력
        os.close();    //출력 스트림을 닫음
    }
}
