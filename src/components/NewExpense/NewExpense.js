import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const formChangeHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
  };

  const stopEditingForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {" "}
      {!isEditing && (
        <div className="button-right">
          <button class="on-click" onClick={formChangeHandler}>
            Add Expense{" "}
          </button>{" "}
        </div>
      )}{" "}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingForm}
        />
      )}{" "}
    </div>
  );
};

export default NewExpense;
