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
        <div className="bg-gradient-to-r from-[#434974] to-[#242949] p-4 rounded-lg text-white justify-between items-center">
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
            <button onClick={handleCalculateBalance} className="mt-4 pl-4 pr-4 text-xl btn bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white">Calculate Remaining Balance</button>
            {remainingBalance !== null && (
                <p className="text-white text-lg md:text-2xl mt-3 font-kalam">Remaining Balance: ${remainingBalance}</p>
            )}
        </div>
    );
}

export default BudgetingTool;
