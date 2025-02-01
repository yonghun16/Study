## SELECT
---
> SELECT는 데이터를 **조회**할 때 사용하는 기본적인 명령어
---
- `SELECT * FROM Customers WHERE Country = "Mexico";`
  - 선택한다 모든 컬럼을
  - Customers 테이블으로부터
  - Country 컬럼이 "Mexico"가 맞는 레코드 중에서
- `SELECT * FROM users ORDER BY age DESC;`
  - age 기준으로 내림차순 정렬
- `SELECT DISTINCT city FROM users;`
  - users 테이블의 총 데이터 개수를 반환.


## JOIN
---
> SQL에서 JOIN은 두 개 이상의 테이블을 특정 조건에 따라 결합하여 하나의 결과 집합을 생성

---
#### INNER JOIN
> 조건에 맞는 데이터만 선택
- `SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`
  1. SELECT *
    - *는 **모든 컬럼(열)**을 선택한다는 의미입니다.
    - 즉, Orders와 Customers 테이블의 모든 데이터를 조회합니다.
  2. FROM Orders
	- Orders 테이블을 기준으로 데이터를 가져옵니다.
  3. INNER JOIN Customers
	- Orders 테이블과 Customers 테이블을 INNER JOIN으로 결합(조인)합니다.
	- INNER JOIN은 두 테이블에서 지정한 조건에 맞는 행만 선택합니다. (교집합 개념)
  4. ON Orders.CustomerID = Customers.CustomerID
	- 두 테이블을 연결하는 기준(조건)을 설정합니다.
	- Orders 테이블의 CustomerID와 Customers 테이블의 CustomerID 값이 같은 경우에만 결과에 포함됩니다.

#### LEFT JOIN 
> LEFT JOIN에 맞는 데이터만 선택
- `SELECT * FROM Orders LEFT JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`

#### RIGHT JOIN
> RIGHT JOIN에 맞는 데이터만 선택
- `SELECT * FROM Orders RIGHT JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`

#### FULL JOIN
> 두 테이블에서 일치하는 행을 포함하고, 일치하지 않는 경우에도 NULL을 포함하여 반환
- `SELECT * FROM Orders FULL JOIN Customers ON Orders.CustomerID=Customers.CustomerID;`

#### CROSS JOIN
> 두 테이블의 모든 조합(카테시안 곱, Cartesian Product)을 반환
- `SELECT * FROM Orders CROSS JOIN Customers;`

#### SELF JOIN
> 같은 테이블을 자기 자신과 JOIN하는 경우
- `SELECT A.name, B.name FROM employees A JOIN employees B ON A.manager_id = B.id;`
