import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function Calculator() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [totalSavings, setTotalSavings] = useState(null);
  const [calculationType, setCalculationType] = useState("savings");

  useEffect(() => {
    handleCalculate();
  }, [calculationType]);

  const handleCalculate = () => {
    const principle = parseInt(monthlyIncome) - parseInt(monthlyExpenses);
    const months = parseInt(timeDuration);
    const rate = parseFloat(interestRate) / 100;
    let futureValue;
    if (calculationType === "savings") {
      futureValue = principle * (Math.pow(1 + rate, months) - 1) / rate;
      // Subtract 2% tax from total savings
      futureValue -= (2 / 100) * futureValue;
    } else if (calculationType === "retirement") {
      // Perform retirement calculation
      futureValue = principle * (Math.pow(1 + rate, months) - 1) / rate;
    }
    setTotalSavings(futureValue.toFixed(2));
  };

  return (
    <div className="flex overflow-hidden bg-[#181A2E]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="space-y-8 mt-8 space-x-10 mr-8">
          <span className="font-kalam text-xl md:text-5xl text-slate-100 font-bold ml-8 mt-8">
            Savings & Retirement Calculator
          </span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="monthlyIncome" className="text-white">
                Monthly Income
              </label>
              <input
                id="monthlyIncome"
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="monthlyExpenses" className="text-white">
                Monthly Expenses
              </label>
              <input
                id="monthlyExpenses"
                type="number"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="monthlySavings" className="text-white">
                Monthly Savings
              </label>
              <input
                id="monthlySavings"
                type="number"
                value={monthlySavings}
                onChange={(e) => setMonthlySavings(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="interestRate" className="text-white">
                Interest Rate (%)
              </label>
              <input
                id="interestRate"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="timeDuration" className="text-white">
                Time Duration (months)
              </label>
              <input
                id="timeDuration"
                type="number"
                value={timeDuration}
                onChange={(e) => setTimeDuration(e.target.value)}
                className="w-full rounded-md p-2 bg-gray-800 text-white"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="calculationType" className="text-white">
                Calculation Type
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="savings"
                  name="calculationType"
                  value="savings"
                  checked={calculationType === "savings"}
                  onChange={() => setCalculationType("savings")}
                  className="text-[#8C52FF] form-radio h-5 w-5"
                />
                <label htmlFor="savings" className="text-white">
                  Savings
                </label>
                <input
                  type="radio"
                  id="retirement"
                  name="calculationType"
                  value="retirement"
                  checked={calculationType === "retirement"}
                  onChange={() => setCalculationType("retirement")}
                  className="text-[#8C52FF] form-radio h-5 w-5"
                />
                <label htmlFor="retirement" className="text-white">
                  Retirement
                </label>
              </div>
            </div>
            <div className="m-4">
              <button
                onClick={handleCalculate}
                className="btn bg-[#8C52FF] text-2xl sm: text-xl hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white pl-4 pr-4"
              >
                Calculate
              </button>
            </div>
          </div>
          {totalSavings !== null && (
            <div className="text-2xl font-kalam relative bg-gradient-to-r from-[#434974] to-[#242949] p-4 sm:p-6 rounded-lg">
              {calculationType === "savings" ? (
                <>
                  Total Savings after {timeDuration} months:{" "}
                  <span className="text-green-500">$ {totalSavings}</span>
                  <p className="text-sm text-red-500">*Tax of 2% has been deducted on selecting savings.</p>
                </>
              ) : (
                <>
                  Retirement Savings after {timeDuration} months:{" "}
                  <span className="text-green-500">$ {totalSavings}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
