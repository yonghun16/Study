# SQL

- **SQL(Structured Query Language)**은 **관계형 데이터베이스(RDB)**를 다루기 위한 표준 질의 언어입니다.
  - 데이터 정의(DDL)
  - 데이터 조작(DML)
- 데이터 제어(DCL)
  - 트랜잭션 제어(TCL)


### 🔧 SQL 명령어 분류
| 분류           | 키워드                                 | 설명                                |
|----------------|----------------------------------------|-------------------------------------|
| DDL (정의)     | `CREATE`, `ALTER`, `DROP`              | 테이블, 인덱스 등 구조 정의 및 변경 |
| DML (조작)     | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | 실제 데이터를 조회/수정/삽입/삭제   |
| DCL (제어)     | `GRANT`, `REVOKE`                      | 사용자 권한 부여 및 회수            |
| TCL (트랜잭션) | `COMMIT`, `ROLLBACK`, `SAVEPOINT`      | 트랜잭션 처리 및 롤백               |


### 📋 기본 SQL 문법 예시
#### 1. 테이블 생성 (DDL)
```SQL
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE
);
```

#### 2. 데이터 삽입 (DML)
```SQL
INSERT INTO users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com');
```

#### 3. 데이터 조회 (DML)
```SQL
SELECT * FROM users;
SELECT name FROM users WHERE id = 1;
```

#### 4. 데이터 수정 (DML)
```SQL
UPDATE users SET name = 'Alicia' WHERE id = 1;
```

#### 5. 데이터 삭제 (DML)
```SQL
DELETE FROM users WHERE id = 1;
```


### 🔍 고급 기능 예시
#### 👉 JOIN (테이블 간 관계 연결)
```SQL
SELECT u.name, o.item
FROM users u
JOIN orders o ON u.id = o.user_id;
```

#### 👉 GROUP BY / 집계 함수
```SQL
SELECT user_id, COUNT(*) as order_count
FROM orders
GROUP BY user_id;
```

#### 👉 서브쿼리
```SQL
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders WHERE item = 'Laptop');
```


### ✅ SQL의 장점
- 관계형 데이터베이스 표준 언어
- 복잡한 데이터 조회 및 조작 가능
- 다양한 DBMS(MySQL, PostgreSQL, Oracle 등)에서 사용 가능
- 인덱스/트랜잭션 등 고급 기능 지원

