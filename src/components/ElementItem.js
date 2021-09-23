import ElementDate from './ElementDate';
import { useState } from 'react';

const ElementItem = (props) => {
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount('500');
  };

  return (
    <div className='expenses-card'>
      <ElementDate date={props.date} />{' '}
      <div className='expenses-description'>
        <h2> {props.title} </h2>{' '}
      </div>{' '}
      <div className='expenses-price'>
        <h2> $ {amount} </h2>
      </div>{' '}
    </div>
  );
};

export default ElementItem;
