import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const Expenses = ({ expenses }) => (
  <div className='gastos-realizados'>
    <h2>Expenses</h2>
    {expenses.map((expense) => (
      <Expense key={expense.id} expense={expense}></Expense>
    ))}
  </div>
);

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default Expenses;
