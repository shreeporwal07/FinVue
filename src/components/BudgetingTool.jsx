import React, { useState } from 'react';

function BudgetingTool() {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [remainingBalance, setRemainingBalance] = useState(null);

    const handleCalculateBalance = () => {
        const remaining = parseFloat(income) - parseFloat(expenses);
        setRemainingBalance(remaining.toFixed(2));
    };

    return (
        <div className="p-5">
            <h2 className="text-xl font-semibold">Budgeting Tool</h2>
            <label htmlFor="income" className="text-white block mt-3">Monthly Income:</label>
            <input
                id="income"
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <label htmlFor="expenses" className="text-white block mt-3">Monthly Expenses:</label>
            <input
                id="expenses"
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white"
            />
            <button onClick={handleCalculateBalance} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Calculate Remaining Balance</button>
            {remainingBalance !== null && (
                <p className="text-white mt-3">Remaining Balance: ${remainingBalance}</p>
            )}
        </div>
    );
}

export default BudgetingTool;
