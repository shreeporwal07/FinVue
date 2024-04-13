import React, { useState } from 'react';

function InvestmentTracker() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');
  const [totalInvestment, setTotalInvestment] = useState(null);

  const handleCalculateInvestment = () => {
    const principle = parseFloat(initialInvestment);
    const monthlyContributionAmount = parseFloat(monthlyContribution);
    const months = parseInt(investmentDuration);
    const rate = parseFloat(interestRate) / 100;
    let futureValue = principle;
    for (let i = 0; i < months; i++) {
      futureValue = futureValue * (1 + rate) + monthlyContributionAmount;
    }
    setTotalInvestment(futureValue.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-r from-[#434974] to-[#242949] p-4 rounded-lg text-white justify-between items-center">
      <h2 className="text-xl font-semibold">Investment Tracker</h2>
      <label htmlFor="initialInvestment" className="text-white block mt-3">Initial Investment:</label>
      <input
        id="initialInvestment"
        type="number"
        value={initialInvestment}
        onChange={(e) => setInitialInvestment(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <label htmlFor="monthlyContribution" className="text-white block mt-3">Monthly Contribution:</label>
      <input
        id="monthlyContribution"
        type="number"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(e.target.value)}
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
      <label htmlFor="investmentDuration" className="text-white block mt-3">Investment Duration (months):</label>
      <input
        id="investmentDuration"
        type="number"
        value={investmentDuration}
        onChange={(e) => setInvestmentDuration(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button onClick={handleCalculateInvestment} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Calculate Investment</button>
      {totalInvestment !== null && (
        <p className="text-white mt-3">Total Investment after {investmentDuration} months: ${totalInvestment}</p>
      )}
    </div>
  );
}

export default InvestmentTracker;
