// https://www.acmicpc.net/problem/1271

import java.io.*;
import java.math.BigInteger;
import java.util.*;

public class b1271 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        BigInteger n = new BigInteger(st.nextToken());
        BigInteger m = new BigInteger(st.nextToken());
        System.out.print(n.divide(m) + "\n" + n.remainder(m));
    }
}