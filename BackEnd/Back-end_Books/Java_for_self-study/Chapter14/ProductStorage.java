import java.util.*;

public class ProductStorage {
    private List<Product> list = new ArrayList<>();
    private Scanner scanner = new Scanner(System.in);
    private int counter;

    public void showMenu() {
        while(true) {
            System.out.println("---------------------------");
            System.out.println("1.등록 | 2.목록 | 3.종료");
            System.out.println("---------------------------");

            System.out.print("선택: ");
            String selectNo = scanner.nextLine();  // 번호 읽기
            switch(selectNo) {
                case "1": registerProcuct(); break;  // product 등록
                case "2": showProducts(); break;     // 등록된 모든 Product 정보 보기
                case "3": return;   // 프로그램 종료
            }
        }
    }

    public void registerProcuct() {
        try {
            Product product = new Product();
            product.setPno(++counter);   // pno 세팅

            System.out.print("상품명: ");
            product.setName(scanner.nextLine());

            System.out.print("가격: ");
            product.setPrice(Integer.parseInt(scanner.nextLine()));  // 가격을 일고 세팅

            System.out.print("재고: ");
            product.setStock(Integer.parseInt(scanner.nextLine()));   // 재고을 일고 세팅

            list.add(product);
        } catch(Exception e) {
            System.out.println("등록 에러: " + e.getMessage());
        }
    }
    public void showProducts() {
        for(Product p : list) {
            System.out.println(p.getPno() + "\t" + p.getName() + "\t" + p.getPrice() + "\t" + p.getStock());
        }
    }
}
