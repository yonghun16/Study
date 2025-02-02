## CREATE
---
> CREATE 문은 SQL에서 데이터베이스 객체(테이블, 인덱스, 뷰 등)를 생성할 때 사용
---

```sql
CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    image BLOB,
    price INTEGER NOT NULL,
    description TEXT,
    place TEXT NOT NULL
)
```
  - items이라는 테이블을 생성
  - id 컬럼 생성, 자료형은 INTEGER, PRIMARY KEY로 지정
  - title 컬럼 생성, 자료형은 TEXT, NOT NULL로 지정
  - image 컬럼 생성, 자료형은 BLOB
  - price 컬럼 생성, 자료형은 INTEGER, NOT NULL로 지정
  - description 컬럼 생성, 자료형은 TEXT
  - place 컬럼 생성, 자료형는 TEXT, NOT NULL로 지정
