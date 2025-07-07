class StringUtil {
	
	public static int compare(char[] s1, char[] s2){
    // 1. 서로 다른 문자가 등장하는 위치가 존재하는 경우
    int n = Math.min(s1.length, s2.length);
    for (int i = 0; i < n; i++ ) {
      if (s1[i] != s2[i]) {
        return (int)s1[i] - s2[i];
      }
    }

    // 2. 서로 다른 문자가 등장하지 않는 경우 (길이가 같은 경우와 다른 경우)

		return s1.length - s2.length;
	}
	
	public static boolean equals(char[] s1, char[] s2){
		
    if(s1.length != s2.length) {
      return false;
    }

    for (int i=0; i<s1.length; i+=1) {
      if (s1[i] != s2[i]){
        return false;
      }
    }
    return true;
	}
}

public class Main {

	public static void main(String[] args) {
		// 이 공간에서는 자유롭게 테스트 및 출력을 해도 됩니다 
		char[] s1 = "algorithm".toCharArray();
		char[] s2 = "allergy".toCharArray();
		
		System.out.printf("compare() Result : %d\n", StringUtil.compare(s1,s2) );
		System.out.printf("equals() Result : %b\n", StringUtil.equals(s1,s2) );
	}
}
