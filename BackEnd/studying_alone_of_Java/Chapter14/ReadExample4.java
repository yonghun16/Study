/* 한 문자씩 읽기 */

import java.io.FileReader;
import java.io.Reader;

public class ReadExample4 {
    public static void main(String[] args) throws Exception {
        Reader reader = new FileReader("test11.txt");
        while(true) {
            int data = reader.read();       //한 문자씩 읽기
            if(data == -1) break;
            System.out.println((char)data);
        }
        reader.close();
    }
}
