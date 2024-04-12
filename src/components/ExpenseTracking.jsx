import React, { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function ExpenseTracking() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [expenseLabel, setExpenseLabel] = useState("");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const handleAddExpense = () => {
    if (newExpense.trim() !== "" && expenseLabel.trim() !== "") {
      setExpenses([...expenses, { label: expenseLabel, amount: newExpense }]);
      setNewExpense("");
      setExpenseLabel("");
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.labels = expenses.map(
        (expense) => expense.label
      );
      chartInstance.current.data.datasets[0].data = expenses.map((expense) =>
        parseFloat(expense.amount)
      );
      chartInstance.current.update();
    }
  }, [expenses]);

  const generateChart = () => {
    const ctx = chartRef.current.getContext("2d");
    const additionalColors = [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(0, 255, 0, 0.5)",
        "rgba(0, 0, 255, 0.5)",
        "rgba(128, 0, 128, 0.5)",
        // Additional colors
        "rgba(255, 128, 0, 0.5)",
        "rgba(128, 128, 0, 0.5)",
        "rgba(128, 0, 255, 0.5)",
        "rgba(0, 128, 255, 0.5)",
        "rgba(128, 255, 0, 0.5)",
        "rgba(0, 255, 128, 0.5)",
        "rgba(255, 0, 128, 0.5)",
        "rgba(0, 128, 128, 0.5)",
        "rgba(255, 128, 255, 0.5)",
        "rgba(128, 255, 255, 0.5)"
        // Add more colors as needed
      ];
  
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: expenses.map((expense) => expense.label),
        datasets: [
          {
            label: "Expenses",
            data: expenses.map((expense) => parseFloat(expense.amount)),
            backgroundColor: [
              ...additionalColors,
              ...additionalColors.slice(0, expenses.length - additionalColors.length)
            ],
            borderColor: [
              ...additionalColors.map(color => color.replace('0.5', '1')),
              ...additionalColors.slice(0, expenses.length - additionalColors.length).map(color => color.replace('0.5', '1'))
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Expense Distribution",
          },
        },
      },
    });
  };

  return (
    <div className="grid md:grid-cols-2 p-5">
      <div className="">
        <h2 className="text-xl font-semibold">Expense Tracking</h2>
        <div className="flex flex-col mt-3 space-y-4">
          <input
            type="text"
            value={expenseLabel}
            onChange={(e) => setExpenseLabel(e.target.value)}
            className="p-2 rounded-l bg-gray-800 text-white"
            placeholder="Expense Label"
          />
          <input
            type="text"
            value={newExpense}
            onChange={(e) => setNewExpense(e.target.value)}
            className="p-2 rounded-r bg-gray-800 text-white"
            placeholder="Expense Amount"
          />
        </div>
        <button
          onClick={handleAddExpense}
          className="mt-4 pl-4 pr-4 text-xl btn bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white"
        >
          Add Expense
        </button>
        <button
          onClick={generateChart}
          className="mt-4 text-xl pl-4 pr-4 ml-3 btn bg-green-500 text-white rounded-3xl hover:bg-green-700"
        >
          Generate Chart
        </button>
        <ul className="space-y-4 mt-4">
          {expenses.map((expense, index) => (
            <li
              key={index}
              className="bg-gradient-to-r from-[#434974] to-[#242949] p-2 rounded-lg text-white flex justify-between items-center"
            >
              <span>
                {expense.label}: ${parseFloat(expense.amount).toFixed(2)}
              </span>
              <button
                onClick={() => handleDeleteExpense(index)}
                className="btn rounded-3xl bg-red-500 text-white px-2.5 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <p className="text-white mt-3">
          Total Expenses: $
          {expenses
            .reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
            .toFixed(2)}
        </p>
      </div>
      <div className="mt-4 h-96">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default ExpenseTracking;
