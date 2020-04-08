import React, { useState } from 'react';
import Error from './Error';
import shortId from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ setExpense, setCreateExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [error, setError] = useState(false);
  
  const addExpense = (e) => {
    e.preventDefault();
    if (
      expenseAmount < 1 ||
      isNaN(expenseAmount) ||
      expenseName.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);

    const expense = {
      expenseName,
      expenseAmount,
      id: shortId.generate(),
    };
    setExpense(expense);
    setCreateExpense(true);
    setExpenseName('');
    setExpenseAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Enter your expenses</h2>
      {error ? <Error message='Invalid expense'></Error> : null}

      <div className='campo'>
        <label>Expense name</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='i.e. Transportation'
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        ></input>
      </div>

      <div className='campo'>
        <label>Quantity</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='i.e. 300'
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
        ></input>
      </div>

      <input
        type='submit'
        className='button-primary u-full-width'
        value='Add expense'
      ></input>
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};
export default Form;
