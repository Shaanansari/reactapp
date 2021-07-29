import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';


const Dummy_Expenses = [
  {
    id:'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28)
  },
  {
    id:'e2',
    title: 'Paper',
    amount: 554.67,
    date: new Date(2019, 9, 28)
  },
  {
    id:'e3',
    title: 'Room Rent',
    amount: 854.67,
    date: new Date(2021, 5, 28)
  },
  {
    id:'  e4',
    title: 'Vhicle',
    amount: 214.67,
    date: new Date(2021, 8, 28)
  },
];

function App() {

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)   => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
