/* 객체 동등 비교(equals()메소드) */

public class Member {
    public String id;

    public Member(String id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if(obj instanceof Member) {         //매개값이 member타입인지 확인
            Member member = (Member) obj;   //member 타입으로 강제 변환하고
            if(id.equals(member.id)) {      //id필드값이 동일한지 검사한 후,
                return true;                //동일하다면 true리턴
            }
        }
        return false;       //매개값이 member타입이 아니거나, 
                            //id필드 값이 다른경우 false리턴
    }
}
