import './ExpensesList.css';
import ElementItem from './ElementItem';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className='no-item expenses-card'> No item to show. </p>;
  }

  return (
    <div>
      {' '}
      {props.items.map((expense) => (
        <ElementItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}{' '}
    </div>
  );
};

export default ExpensesList;
