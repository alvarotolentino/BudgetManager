import React, { useState } from 'react';

const Form = () => {
  return (
    <form>
      <h2>Enter your expenses</h2>
      <div className='campo'>
        <label>Expense name</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='i.e. Transportation'
        ></input>
      </div>

      <div className='campo'>
        <label>Quantity</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='i.e. 300'
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
export default Form;
