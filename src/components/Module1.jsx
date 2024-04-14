import React from 'react';
import chart1 from '../assets/heikin-ashi-chart-explained.webp';

const modules = [
  {
    title: "Heikin Ashi Charts",
    description: "According to our testing, Heikin Ashi (HA) charts are the best-performing charts. Heikin Ashi charts factor in recent price action to create more reliable and accurate data points than regular candlestick charts. This makes them ideal for traders who need to identify potential trading signals and long-term investors who want to confirm their investment strategies. Heikin Ashi combines candlestick charting and price averaging to create an enhanced visual representation of trends. Essentially, Heikin Ashi smooths out daily volatility to unveil actionable price trends, making it a superior chart for developing trading strategies.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/04/heikin-ashi-chart-explained.webp"
  },
  {
    title: "Japanese Candlestick Charts",
    description: "Japanese Candlestick charts have their origins in the 1700s when rice traders in Japan began to use them as a way of predicting and tracking price movements. The candlesticks provide a graphic representation of price data over time. They comprise a body (the area between the open and closing price) and shadows (the area above or below the body). The key benefit of using candlestick charts is that they allow traders to quickly identify potential patterns in the market, which can help them decide when to enter or exit a trade. For example, if a pattern appears where the upper shadow is consistently larger than the lower shadow, then this could indicate that buying pressure is increasing.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/04/japanese-candlestick-chart-explained.webp"
  },
  {
    title: "OHLC Charts",
    description: "For the more traditional traders, OHLC charts can also be used to analyze patterns and price trends. These bar charts show a given security’s opening, high, low, and closing prices over a specified period. While they don’t have the same level of detail as candlestick charts, they still provide useful information for traders looking for entry and exit points.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/OHLC-chart-explained-1280x698.webp"
  },
  {
    title: "RainDrop Charts",
    description:"Raindrop charts are a unique charting style developed by TrendSpider that helps traders visualize a security’s price and volume action. This chart type comprises a series of candles, each representing one trading session. Raindrops, unlike traditional candlesticks, do not possess open or close prices. Instead, they are formed by combining a high, low, left VWAP, and right VWAP. The left side represents the first half of the trading period, while the right side represents the second half. The width of each segment corresponds to the trading volume at different price levels. The dashes indicate the VWAP for each respective period. This unique representation provides a comprehensive view of the trading dynamics, empowering traders with valuable insights.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/rain-drop-chart.webp"
  },
  {
    title: "Renko Charts",
    description:"Renko charts (also known as Brick Charts) are another popular analysis tool used to identify support and resistance levels in the market. Unlike traditional candlestick charts, Renko bricks have equal sizes, regardless of the trading range. This makes them especially useful for spotting trends within markets that tend to experience high levels of volatility.The chart is composed of a series of price-based boxes with no time component – meaning that each box represents a certain price move. A new brick appears on the chart when an asset reaches a specific price level or surpasses it. By analyzing Renko charts over different timeframes, traders can pinpoint potential buy and sell signals and entry and exit points for their trades.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2022/09/renko-chart-bricks-1080x513.jpg"
  },
  {
    title: " Kagi Charts",
    description:"Kagi charts identify support and resistance levels to find buy and sell signals. Opposite to Renko Charts, Kagi Charts use price action instead of price movement. The x-axis of a Kagi Chart doesn’t represent time but rather the change in the price of an asset: when the price increases, the line plotting it rises; when the price decreases, the line plotting it falls.If the high or low of two consecutive trading sessions is not exceeded by a specified amount (the reversal amount), then that session is not charted – maintaining a record of only significant movements. This allows traders to spot potential support and resistance levels much faster than other techniques. By watching for these lines to cross over each other, it’s possible to detect buy and sell signals and entry and exit points for their trades.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/kagi-chart-1280x698.webp"
  },
  {
    title: "Line Break Chart",
    description:"Line break charts are similar to Kagi Charts, focusing on price movement as the only important variable. The difference is that line break charts generate new lines each time the closing price exceeds the high or low of a previous period, typically set at 3 bars. This chart type also disregards time intervals, allowing traders to identify potential entry and exit points based on the reversal of trend signals. Line break charts can also be used for support and resistance identification and analysis of sequence-based reversal patterns.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/line-break-chart-explained-1280x698.webp"
  },
  {
    title: "Point & Figure Charts",
    description:"Point and Figure charts (P&F) are composed of ‘Xs and ‘Os, representing price movements. When the prices increase, an ‘X’ is plotted on the chart, and an ‘O’ is plotted when they move down. These charts help traders identify support and resistance levels by plotting points that signify a reversal in the trend. P&F charts ignore time and volume, making them ideal for identifying long-term trends.Each point on a P&F chart represents a set price movement (the box size). This eliminates noise and helps traders identify similar trends. For example, a box size of $5 would mean that each ‘X’ or ‘O’ represents the stock moving up or down by at least $5.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/pont-and-figure-chart-explained-696x380.webp"
  },
  {
    title: "Line Chart",
    description:"Line Charts are one of the most commonly used forms of stock charting and are created by connecting data points (closing prices) with a line. This type of chart is simple to read and will give traders an indication of the overall trend over time. Line charts are often used to identify support and resistance levels and areas of consolidation. They can also identify price patterns that may signal potential reversals in price movement. Additionally, they provide an easy way to compare current prices with previous periods, allowing traders to make more informed decisions about how best to enter or exit a position.",
    link: "https://youtu.be/KHFz8-o-9aI?si=AHJ9_u7RDI_pnouf",
    image: "https://www.liberatedstocktrader.com/wp-content/uploads/2023/07/line-chart-explained-696x398.webp"
  },
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
