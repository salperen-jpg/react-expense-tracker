import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // }
  // )

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:e.target.value
    // })
    // console.log(e.target.value)
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:e.target.value
    // })
    // console.log(e.target.value)
  };
  const enteredDateHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:e.target.value
    // })
    // console.log(e.target.value)
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="my-form">
          <div className="form-element">
            <label> Title </label>{" "}
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />{" "}
          </div>{" "}
          <div className="form-element">
            <label> Amount </label>{" "}
            <input
              type="num"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />{" "}
          </div>{" "}
          <div className="form-element">
            <label> Date </label>{" "}
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={enteredDateHandler}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="my-button">
          <button type="button" onClick={props.onCancel}>
            {" "}
            Cancel{" "}
          </button>{" "}
          <button type="submit"> Add Expense </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default ExpenseForm;
