import React from "react";
import { Doughnut } from "react-chartjs-2";

function ExpenseCategories() {
  // Sample data for the doughnut chart
  const data = {
    labels: ["Housing", "Transportation", "Groceries", "Utilities", "Others"],
    datasets: [
      {
        label: "Expenses by Category",
        data: [300, 150, 200, 100, 250], // Sample expense amounts
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF"
        ]
      }
    ]
  };

  return (
    <div>
      <h2>Expense Categories</h2>
      <div style={{ width: "400px", height: "400px" }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}

export default ExpenseCategories;
