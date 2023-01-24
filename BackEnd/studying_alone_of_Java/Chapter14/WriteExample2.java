/* 배열 전체를 출력하기 */

import java.io.FileOutputStream;
import java.io.OutputStream;

public class WriteExample2 {
    public static void main(String[] args) throws Exception {
        OutputStream os = new FileOutputStream("test2db");

        byte[] array = { 10, 20, 30 };

        os.write(array);   //배열의 모든 바이트를 출력

        os.flush();        //출력 버퍼에 잔류하는 모든 바이트를 출력
        os.close();        //출력 스트림을 닫음
    }
}
