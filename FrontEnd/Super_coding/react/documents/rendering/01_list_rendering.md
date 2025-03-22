## List Rendering

#### 리스트 렌더링
- 방법1 : id를 받아 filter를 이용해 해당 요소를 제거 후 재 배열화
- 방법2 : index 를 받아 slice를 이용해 index 이전 배열과 이후 배열를 만들고 재 배열화
```jsx
// App.js (부모 컴포넌트)
  const deleteExpenseItem = (id, index) => {
    // 방법 1. filter (id를 받는 방법)
    const newFilteredArray = expenses.filter(item => item.id !== id);
    setExpenses(newFilteredArray);

    // 방법 2. slice (index를 받는 방법)
      // [0, 1, 2, ... , index, index+1 ..., n-1]
      // [0, 1, 2, ... , index, index+1 ..., n-1]
      // [0, ..., index-1], [index+1, ..., n-1]
    const beforeArray = expenses.slice(0, index);
    const afterArray = expenses.slice(index + 1);
    setExpenses([...beforeArray, ...afterArray]);
    
  };
  return (
    <>
        <PaymentForm getPaymentFormData={getPaymentFormData} />
        <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem}/>
    </>
  );

// Expenses.js (자식 컴포넌트)
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem
          id={item.id}
          index={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
```

#### 리엑트가 리렌더링 되는 경우
- state 변경이 있을 때
- 부모 컴포넌트가 렌더링 될 때
- 새로운 props이 들어올 때
- shouldComponentUpdate에서 true를 반환될 때
- forceUpdate가 실행될 때
