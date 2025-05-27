/* Member 객체를 중복 없이 저장하는 HashSet */

import java.util.*;

public class HashSetExample2 {
    public static void main(String[] args) {
        Set<Member> set = new HashSet<Member>();

        set.add(new Member("홍길동", 30));
        set.add(new Member("홍길동", 30)); //인스턴스는 다르지만 내부 데이터가 동일하므로 객체 1개만 저장

        System.out.println("총 객체수 : " + set.size());
    }
}
