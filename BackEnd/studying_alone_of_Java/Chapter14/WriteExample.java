/* 1byte씩 출력하기 */

import java.io.FileOutputStream;
import java.io.OutputStream;

public class WriteExample {
    public static void main(String[] args) throws Exception {
        OutputStream os = new FileOutputStream("test1db");

        byte a = 10;
        byte b = 20;
        byte c = 30;

        os.write(a);
        os.write(b);
        os.write(c);

        os.flush();  // 내부 버퍼에 잔류된 바이트를 모두 출력하는 역할을 함. 
        os.close();
    }
}
