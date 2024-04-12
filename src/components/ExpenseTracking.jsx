import React, { useState } from 'react';

function ExpenseTracking() {
    const [expenses, setExpenses] = useState([]);
    const [newExpense, setNewExpense] = useState('');

    const handleAddExpense = () => {
        if (newExpense.trim() !== '') {
            setExpenses([...expenses, newExpense]);
            setNewExpense('');
        }
    };

    const handleDeleteExpense = (index) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
    };

    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold">Expense Tracking</h2>
            <input
                type="text"
                value={newExpense}
                onChange={(e) => setNewExpense(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white mt-3"
                placeholder="Enter new expense"
            />
            <button onClick={handleAddExpense} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add Expense</button>
            <ul className="mt-3">
                {expenses.map((expense, index) => (
                    <li key={index} className="text-white">{expense} <button onClick={() => handleDeleteExpense(index)} className="ml-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Delete</button></li>
                ))}
            </ul>
            <p className="text-white mt-3">Total Expenses: {expenses.length}</p>
        </div>
    );
}

export default ExpenseTracking;
