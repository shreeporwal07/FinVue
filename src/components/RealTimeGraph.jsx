import React, { useState, useEffect } from 'react';
import Tooltip from './Tooltip';
import RealtimeChart from '../charts/RealtimeChart';

// Import utilities
import { tailwindConfig, hexToRGB } from '../utils/Utils';

function RealTimeGraph() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  // Fake real-time data
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(35);
  
  // Dummy data to be looped
  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
    53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
    65.91, 64.44, 65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92,
    50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42,
    50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42, 55.93, 57.71,
    50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65, 50.25,
  ];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));
  const [userMoney, setUserMoney] = useState(100); // Initial money amount
  const [profitLoss, setProfitLoss] = useState(0); // Initial profit/loss
  const [gameActive, setGameActive] = useState(false); // Game state
  const [timeRemaining, setTimeRemaining] = useState(60); // Duration of the game in seconds
  const [unitsBought, setUnitsBought] = useState(0); // Units bought by the user
  const [totalValueBought, setTotalValueBought] = useState(0); // Total value of units bought
  const [totalValueSold, setTotalValueSold] = useState(0); // Total value of units sold

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(generateDates().slice(0, range).reverse());

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval)
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [...slicedData, data[increment + range]]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  // Timer functionality
  useEffect(() => {
    if (gameActive && timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000); // decrement timeRemaining every second
      return () => clearInterval(interval);
    }
  }, [gameActive, timeRemaining]);

  // Function to start the game
  const startGame = () => {
    setGameActive(true);
    setUserMoney(100); // Reset user money
    setTimeRemaining(60); // Reset time remaining
    setUnitsBought(0); // Reset units bought
    setTotalValueBought(0); // Reset total value bought
    setTotalValueSold(0); // Reset total value sold
    setProfitLoss(0); // Reset profit/loss
  };

  // Function to buy at the current price
  const buy = () => {
    if (gameActive && userMoney >= slicedData[slicedData.length - 1]) {
      setUserMoney(prevMoney => prevMoney - slicedData[slicedData.length - 1]);
      setUnitsBought(prevUnits => prevUnits + 1); // Increment units bought
      setTotalValueBought(prevValue => prevValue + slicedData[slicedData.length - 1]); // Increment total value bought
    }
  };

  // Function to sell at the current price
  const sell = () => {
    if (gameActive && unitsBought > 0) {
      setUserMoney(prevMoney => prevMoney + slicedData[slicedData.length - 1]);
      setUnitsBought(prevUnits => prevUnits - 1); // Decrement units bought
      setTotalValueSold(prevValue => prevValue + slicedData[slicedData.length - 1]); // Increment total value sold
    }
  };

  // Calculate profit/loss in real-time
  useEffect(() => {
    if (gameActive && timeRemaining === 0) {
      setGameActive(false);
    } else if (gameActive && timeRemaining > 0) {
      const currentProfitLoss = totalValueSold - totalValueBought;
      setProfitLoss(currentProfitLoss);
    }
  }, [totalValueBought, totalValueSold, gameActive, timeRemaining]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Real Time Value</h2>
        <Tooltip className="ml-2">
          <div className="text-xs text-center whitespace-nowrap">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <p className="text-white text-sm mb-2">
          You have ${userMoney} and you have to make $30 profit in {timeRemaining} sec
        </p>
        {!gameActive && (
          <button onClick={startGame} className="bg-green-500 text-white px-4 py-2 rounded-md mb-2">
            Start
          </button>
        )}
        {gameActive && (
          <>
            <RealtimeChart data={{ labels: slicedLabels, datasets: [{ data: slicedData }] }} width={595} height={248} />
            <div className="flex justify-between items-center mt-4">
              <button onClick={buy} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                Buy
              </button>
              <button onClick={sell} className="bg-red-500 text-white px-4 py-2 rounded-md">
                Sell
              </button>
            </div>
            <p className="text-white mt-2">Real-time Profit/Loss: ${profitLoss}</p>
            <p className="text-white mt-2">Units Bought: {unitsBought}</p>
          </>
        )}
        {timeRemaining === 0 && (
          <p className="text-white mt-4">
            Game Over! Net profit/loss: ${profitLoss}
          </p>
        )}
      </div>
    </div>
  );
}

export default RealTimeGraph;
