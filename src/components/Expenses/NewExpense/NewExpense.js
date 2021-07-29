import ExpenseForm from './ExpenseForm';
import React from 'react';
import './NewExpense.css';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredDataFromExpenseForm) => {
        const expenseDate = {
            ...enteredDataFromExpenseForm,
            id: Math.random().toString()    
        };

        console.log(expenseDate);
        props.onAddExpense(expenseDate); //Passing data as a object from NewExpense to parent app.js
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

};

export default NewExpense;