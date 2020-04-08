import React from 'react';
import { reviewBudget } from '../helper';
import PropTypes from 'prop-types';

const ManageBudget = ({ budget, balance }) => {
  return (
    <>
      <div className='alert alert-primary'>Budget: $ {budget}</div>
      <div className={reviewBudget(budget, balance)}>Balance: $ {balance}</div>
    </>
  );
};
ManageBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
export default ManageBudget;
