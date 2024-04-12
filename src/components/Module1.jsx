import React from 'react';
import chart1 from '../assets/heikin-ashi-chart-explained.webp';

const modules = [
  {
    title: "Heikin Ashi Charts",
    description: "According to our testing, Heikin Ashi (HA) charts are the best-performing charts. Heikin Ashi charts factor in recent price action to create more reliable and accurate data points than regular candlestick charts. This makes them ideal for traders who need to identify potential trading signals and long-term investors who want to confirm their investment strategies. Heikin Ashi combines candlestick charting and price averaging to create an enhanced visual representation of trends. Essentially, Heikin Ashi smooths out daily volatility to unveil actionable price trends, making it a superior chart for developing trading strategies.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: chart1
  },
  {
    title: "Japanese Candlestick Charts",
    description: "Japanese Candlestick charts have their origins in the 1700s when rice traders in Japan began to use them as a way of predicting and tracking price movements. The candlesticks provide a graphic representation of price data over time. They comprise a body (the area between the open and closing price) and shadows (the area above or below the body). The key benefit of using candlestick charts is that they allow traders to quickly identify potential patterns in the market, which can help them decide when to enter or exit a trade. For example, if a pattern appears where the upper shadow is consistently larger than the lower shadow, then this could indicate that buying pressure is increasing.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: chart1
  },
  {
    title: "OHLC Charts",
    description: "For the more traditional traders, OHLC charts can also be used to analyze patterns and price trends. These bar charts show a given security’s opening, high, low, and closing prices over a specified period. While they don’t have the same level of detail as candlestick charts, they still provide useful information for traders looking for entry and exit points.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: chart1
  }
];

function Module() {
  return (
    <div className="grid grid-cols-6 gap-6 ">
      {modules.map((module, index) => (
        <div key={index} className="flex py-5 px-5 flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
          <span className="text-lg md:text-3xl">{index + 1}. {module.title}</span>
          <span className="text-md md:text-xl">{module.description}</span>
          <a href={module.link} className="underline text-lg text-red-500">{module.link}</a>
          <img className="h-68" src={module.image} alt={`Chart for module ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Module;
