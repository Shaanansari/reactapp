
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = selectedYear => { //getting data from ExpenseFilter.js
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses} />   

            {filteredExpenses.length === 0 ? <h1>No Expense Found</h1> : filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}

                />
            ))}

        </Card>
    );
}

export default Expenses;


