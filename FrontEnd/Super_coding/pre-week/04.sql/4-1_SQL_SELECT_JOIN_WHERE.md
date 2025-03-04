## SELECT
---
> SELECT는 데이터를 **조회**할 때 사용하는 기본적인 명령어
---

```sql
SELECT userID, userLocation FROM Customers;
```
  - userID와 userLocation 컬럼을 선택 
  - Customers 테이블에서
```sql
SELECT * FROM Customers WHERE Country = "Mexico";
```
  - 선택한다 모든 컬럼을
  - Customers 테이블으로부터
  - Country 컬럼이 "Mexico"가 맞는 레코드 중에서
```sql
SELECT * FROM users ORDER BY age DESC;
```
  - age 기준으로 내림차순 정렬
```sql
SELECT DISTINCT city FROM users;`
```
  - users 테이블의 총 데이터 개수를 반환.


## JOIN
---
> JOIN은 두 개 이상의 테이블을 **조건**에 따라 **결합**
---

#### INNER JOIN
> 조건에 맞는 데이터만 결합

```sql
SELECT * FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
  1. SELECT *
    - *는 **모든 컬럼(열)**을 선택한다는 의미입니다.
    - 즉, Orders와 Customers 테이블의 모든 데이터를 조회합니다.
  2. FROM Orders
	- Orders 테이블을 기준으로 데이터를 가져옵니다.
  3. INNER JOIN Customers
	- Orders 테이블과 Customers 테이블을 INNER JOIN으로 결합(조인)합니다.
	- INNER JOIN은 두 테이블에서 지정한 조건에 맞는 행만 선택합니다. (교집합 개념)
  4. ON Orders.CustomerID = Customers.CustomerID
	- (두 테이블을 연결하는 기준(조건)을 설정합니다.)
	- Orders 테이블의 CustomerID와 Customers 테이블의 CustomerID 값이 같은 경우에만 결과에 포함됩니다.

#### LEFT JOIN 
> LEFT JOIN은 왼쪽 테이블의 모든 데이터를 유지합니다. 오른쪽 테이블에 일치하는 데이터가 없으면 NULL로 표시됩니다.

```sql
SELECT * FROM Orders LEFT JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
  1. Orders 테이블을 기준(왼쪽) 테이블로 설정.
  2. Customers 테이블을 LEFT JOIN으로 연결.
  3. Orders.CustomerID = Customers.CustomerID를 기준으로 JOIN 수행.
  4. Orders 테이블에 있는 모든 데이터를 가져오고, Customers 테이블에 일치하는 데이터가 없으면 NULL을 반환.


## WHERE
---
> WHERE는 데이터를 **조건**에 맞는 데이터를 선택
---
```sql
SELECT * FROM Customers WHERE Country = "Mexico";
```
  - Customers 테이블에서
  - Country 컬럼이 "Mexico"가 맞는 데이터를 선택
```sql
WHERE Quantity > 10 AND Price < 20;
```
  - Quantity 컬럼이 10보다 크고 Price 컬럼이 20보다 작은 데이터를 선택 
