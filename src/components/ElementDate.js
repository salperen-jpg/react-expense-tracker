import './ElementDateCss.css';

function ElementDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className='expenses-date'>
      <div className='date-month'> {month} </div>{' '}
      <div className='date-year'> {year} </div>{' '}
      <div className='date-day'> {day} </div>{' '}
    </div>
  );
}
export default ElementDate;
