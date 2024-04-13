import React, { useState } from 'react';

function DebtPayoffPlanner() {
  const [initialDebt, setInitialDebt] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [debtDuration, setDebtDuration] = useState('');
  const [totalPaid, setTotalPaid] = useState(null);

  const handleCalculateDebtPayoff = () => {
    const principle = parseFloat(initialDebt);
    const monthlyPaymentAmount = parseFloat(monthlyPayment);
    const months = parseInt(debtDuration);
    const rate = parseFloat(interestRate) / 100;
    let totalPaidAmount = 0;
    let remainingDebt = principle;
    for (let i = 0; i < months; i++) {
      const interest = remainingDebt * rate;
      const principalPayment = monthlyPaymentAmount - interest;
      remainingDebt -= principalPayment;
      totalPaidAmount += monthlyPaymentAmount;
    }
    setTotalPaid(totalPaidAmount.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-r from-[#434974] to-[#242949] p-4 rounded-lg text-white justify-between items-center">
      <h2 className="text-xl font-semibold">Debt Payoff Planner</h2>
      <label htmlFor="initialDebt" className="text-white block mt-3">Initial Debt:</label>
      <input
        id="initialDebt"
        type="number"
        value={initialDebt}
        onChange={(e) => setInitialDebt(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <label htmlFor="monthlyPayment" className="text-white block mt-3">Monthly Payment:</label>
      <input
        id="monthlyPayment"
        type="number"
        value={monthlyPayment}
        onChange={(e) => setMonthlyPayment(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <label htmlFor="interestRate" className="text-white block mt-3">Interest Rate (%):</label>
      <input
        id="interestRate"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <label htmlFor="debtDuration" className="text-white block mt-3">Debt Duration (months):</label>
      <input
        id="debtDuration"
        type="number"
        value={debtDuration}
        onChange={(e) => setDebtDuration(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button onClick={handleCalculateDebtPayoff} className="mt-4 pl-4 pr-4 text-xl btn bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white">Calculate Debt Payoff</button>
      {totalPaid !== null && (
        <p className="text-white text-lg md:text-2xl mt-3 font-kalam">Total Paid after {debtDuration} months: ${totalPaid}</p>
      )}
    </div>
  );
}

export default DebtPayoffPlanner;
