import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;    // true가 나오는 값들만 filter에 값이 전달된다.
  });


  // 필터된 값
  //let expenseContent = <p>값이 없습니다.</p>
  //
  //if (filteredExpenses.length > 0) {                    // filteredExpenses.length가 0보다 크다면
  //  expenseContent = filteredExpenses.map((item) => (   // 재 필터해서 expenseContent에 값을 넣어주자.
  //    <ExpenseItem
  //      key={item.id}
  //      title={item.title}
  //      amount={item.amount}
  //      date={item.date}
  //    />
  //  ))
  //}

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 ?
        <p>값이 없습니다.</p>
        : filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
