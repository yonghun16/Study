## GROUP BY
---
> GROUP BY는 특정 컬럼(열)을 기준으로 **그룹**화
---

```sql
SELECT Country,COUNT(CustomerID) 
FROM Customers 
GROUP BY Country 
HAVING COUNT(CustomerID) > 10;
```
  - Country(나라) 컬럼을 가져오고, COUNT(CustomerID)로 같은 Country에 속한 고객(CustomerID)의 개수를 셈.
  - Customers 테이블에서 데이터를 가져옴. 
  - **GROUP BY** : 같은 나라(Country)에 속하는 고객들을 묶어서 COUNT(CustomerID)를 계산.
  - **HAVING COUNT** : 구매자(CustomerID)가 10보다 큰 경우를 카운트함.  
    : HAVING은 WHERE와 비슷하지만 GROUP BY와 조합되어 사용됨. 


## ORDER BY
---
> ORDER BY는 특정 컬럼(열)을 기준으로 **정렬**
---

```sql
SELECT Country,COUNT(CustomerID)
FROM Customers 
GROUP BY Country 
HAVING COUNT(CustomerID) > 4 
ORDER BY COUNT(CustomerID) DESC;
```
  - **ORDER BY COUNT(CustomerID) DESC** : COUNT(CustomerID)를 내림차순으로 정렬   
    : 정렬 ASC(올림차순) / DESC(내림차순)

## LIMIT
---
> LIMIT는 특정 수의 데이터를 **선택**
---

```sql
SELECT Country, COUNT(CustomerID) AS CustomerCount
FROM Customers 
GROUP BY Country 
HAVING COUNT(CustomerID) > 4 
ORDER BY CustomerCount DESC
LIMIT 5;
```
  - LIMIT 5 : 5개의 데이터를 선택

