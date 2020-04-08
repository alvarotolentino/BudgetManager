import React from 'react';
import Expense from './Expense'

const Expenses = ({expenses}) => (
  <div className='gastos-realizados'>
    <h2>Expenses</h2>
    {expenses.map(expense=>(
      <Expense
      key={expense.id}
      expense={expense}></Expense>
    ))}
  </div>
);

export default Expenses;