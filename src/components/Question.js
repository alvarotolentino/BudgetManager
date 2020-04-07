import React, { useState } from 'react';
import Error from './Error';

const Question = ({ setBudget, setBalance }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const defineBudget = e => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const addBudget = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(quantity);
    setBalance(quantity);
  };

  return (
    <>
      <h2>Enter your budget</h2>
      {error ? <Error message='Budget is invalid'></Error> : null}
      <form onSubmit={addBudget}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Enter your budget'
          onChange={defineBudget}
        ></input>
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Set budget'
        ></input>
      </form>
    </>
  );
};

export default Question;