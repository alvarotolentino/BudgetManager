import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ setBudget, setBalance, setShowQuestion }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const updateQuantity = e => {
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
    setShowQuestion(false)
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
          onChange={updateQuantity}
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
Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setBalance: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
};
export default Question;
