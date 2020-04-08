import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import Expenses from './components/Expenses';
import ManageBudget from './components/ManageBudget';

function App() {
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      setExpenses([...expenses, expense]);
      const remainingBudget = balance - expense.expenseAmount;
      setBalance(remainingBudget);
      setCreateExpense(false);
    }
  }, [balance, expense, expenses, createExpense]);

  return (
    <div className='container'>
      <header>
        <h1>Budget</h1>
        <div className='contenido-principal contenido'>
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setBalance={setBalance}
              setShowQuestion={setShowQuestion}
            ></Question>
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                ></Form>
              </div>
              <div className='one-half column'>
                <Expenses expenses={expenses}></Expenses>
                <ManageBudget budget={budget} balance={balance}></ManageBudget>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
