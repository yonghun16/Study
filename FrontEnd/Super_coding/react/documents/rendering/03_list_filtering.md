## List Filtering

#### 
```jsx
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {  // filter된 expenses가 1개라도 있다면
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        title = {item.title}
        amount = {item.amount}
        date = {item.date}
      />
    ))
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
```
