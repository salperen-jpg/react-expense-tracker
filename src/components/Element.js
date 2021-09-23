import './ElementCss.css';
import ExpensesList from './ExpensesList';
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

const Element = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />{' '}
    </div>
  );
};

export default Element;
