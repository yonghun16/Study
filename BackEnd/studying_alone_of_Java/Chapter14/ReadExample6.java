/* 지정한 길이만큼 읽기 */

import java.io.FileReader;
import java.io.Reader;

public class ReadExample6 {
    public static void main(String[] args) throws Exception {
        Reader reader = new FileReader("test11.txt");
      
        char[] buffer = new char[5];
      
        int readCharNum = reader.read(buffer, 2, 3);
        if(readCharNum != -1) {
            for(int i=0; i<buffer.length; i++) {   //배열 전체를 읽고 출력
                System.out.println(buffer[i]);
            }
        }
        reader.close();
    }
}
