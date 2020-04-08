import React from 'react';

const Expense = ({ expense }) => (
  <li className='gastos'>
    <p>
      {expense.expenseName}
      <span className='gasto'>$ {expense.expenseAmount}</span>
    </p>
  </li>
);

export default Expense;
