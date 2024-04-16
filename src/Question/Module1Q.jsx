import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Module1Q = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cnt, setCnt] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [wrongCnt, setWrongCnt] = useState(-1);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Reset selected option when question changes
  const { user } = useAuth0();
  const fetchScore = async () => {
    console.log("gha");
    try {
      const data = await axios.post(`https://finvue-backened.onrender.com/sendScore/${id}`, {
        score: score,
        userId: user.sub,
      });
      console.log({ data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [questionIndex]);
  const dataArray = [
    [
      {
        Ques: "What is the primary goal of financial management?",
        mcq: {
          options: [
            { no: 1, text: "Maximizing shareholder wealth", isCorrect: true },
            {
              no: 2,
              text: "Maximizing employee satisfaction",
              isCorrect: false,
            },
            { no: 3, text: "Maximizing market share", isCorrect: false },
            { no: 4, text: "Maximizing revenue", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Which financial statement shows a company's revenues and expenses over a period of time?",
        mcq: {
          options: [
            { no: 1, text: "Balance sheet", isCorrect: false },
            { no: 2, text: "Income statement", isCorrect: true },
            { no: 3, text: "Statement of cash flows", isCorrect: false },
            { no: 4, text: "Statement of retained earnings", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What does ROI stand for in finance?",
        mcq: {
          options: [
            { no: 1, text: "Return on Investment", isCorrect: true },
            { no: 2, text: "Risk of Inflation", isCorrect: false },
            { no: 3, text: "Rate of Interest", isCorrect: false },
            { no: 4, text: "Revenue from Operations", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Which of the following represents a long-term liability?",
        mcq: {
          options: [
            { no: 1, text: "Accounts payable", isCorrect: false },
            { no: 2, text: "Inventory", isCorrect: false },
            { no: 3, text: "Accrued expenses", isCorrect: false },
            { no: 4, text: "Bonds payable", isCorrect: true },
          ],
        },
      },
      {
        Ques: "What is the formula for calculating the current ratio?",
        mcq: {
          options: [
            { no: 1, text: "Current assets / Total assets", isCorrect: false },
            {
              no: 2,
              text: "Total liabilities / Current liabilities",
              isCorrect: false,
            },
            {
              no: 3,
              text: "Current assets / Current liabilities",
              isCorrect: true,
            },
            { no: 4, text: "Total assets / Total equity", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Which of the following is a measure of a company's profitability?",
        mcq: {
          options: [
            { no: 1, text: "Working capital ratio", isCorrect: false },
            { no: 2, text: "Debt-to-equity ratio", isCorrect: false },
            { no: 3, text: "Gross profit margin", isCorrect: true },
            { no: 4, text: "Quick ratio", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the purpose of financial leverage?",
        mcq: {
          options: [
            { no: 1, text: "To increase liquidity", isCorrect: false },
            { no: 2, text: "To increase profitability", isCorrect: true },
            { no: 3, text: "To increase financial risk", isCorrect: false },
            { no: 4, text: "To decrease tax liabilities", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Which type of risk refers to the risk of loss due to changes in interest rates?",
        mcq: {
          options: [
            { no: 1, text: "Market risk", isCorrect: false },
            { no: 2, text: "Credit risk", isCorrect: false },
            { no: 3, text: "Interest rate risk", isCorrect: true },
            { no: 4, text: "Liquidity risk", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the role of a financial analyst?",
        mcq: {
          options: [
            { no: 1, text: "To manage employee benefits", isCorrect: false },
            { no: 2, text: "To provide legal advice", isCorrect: false },
            {
              no: 3,
              text: "To evaluate investment opportunities",
              isCorrect: true,
            },
            {
              no: 4,
              text: "To oversee production operations",
              isCorrect: false,
            },
          ],
        },
      },
      {
        Ques: "What does the term 'diversification' refer to in finance?",
        mcq: {
          options: [
            {
              no: 1,
              text: "Investing in a variety of assets to reduce risk",
              isCorrect: true,
            },
            {
              no: 2,
              text: "Focusing investments in a single industry",
              isCorrect: false,
            },
            {
              no: 3,
              text: "Maximizing returns through aggressive investment strategies",
              isCorrect: false,
            },
            {
              no: 4,
              text: "Reducing taxes through investment planning",
              isCorrect: false,
            },
          ],
        },
      },
    ],
    [
      {
        Ques: "In a candlestick chart used in finance, what does a long upper shadow represent?",
        mcq: {
          options: [
            { no: 1, text: "High volatility", isCorrect: true },
            { no: 2, text: "Low volatility", isCorrect: false },
            { no: 3, text: "Bullish trend", isCorrect: false },
            { no: 4, text: "Bearish trend", isCorrect: false },
          ],
        },
      },
      {
        Ques: "In a stock market bar chart, what does the height of each bar represent?",
        mcq: {
          options: [
            { no: 1, text: "Opening price", isCorrect: false },
            { no: 2, text: "Closing price", isCorrect: false },
            { no: 3, text: "Volume of trades", isCorrect: false },
            {
              no: 4,
              text: "Price range between high and low",
              isCorrect: true,
            },
          ],
        },
      },
      {
        Ques: "What type of graph is commonly used to represent the distribution of returns for a financial asset?",
        mcq: {
          options: [
            { no: 1, text: "Line graph", isCorrect: false },
            { no: 2, text: "Histogram", isCorrect: true },
            { no: 3, text: "Scatter plot", isCorrect: false },
            { no: 4, text: "Pie chart", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Which type of graph is suitable for showing the correlation between two financial assets?",
        mcq: {
          options: [
            { no: 1, text: "Bar graph", isCorrect: false },
            { no: 2, text: "Line graph", isCorrect: false },
            { no: 3, text: "Scatter plot", isCorrect: true },
            { no: 4, text: "Area chart", isCorrect: false },
          ],
        },
      },
      {
        Ques: "In a candlestick chart, what does a filled (black or red) body represent?",
        mcq: {
          options: [
            { no: 1, text: "Bullish trend", isCorrect: false },
            {
              no: 2,
              text: " Bearish trend",
              isCorrect: true,
            },
            {
              no: 3,
              text: "High volatility",
              isCorrect: false,
            },
            { no: 4, text: "Low volatility", isCorrect: false },
          ],
        },
      },
      {
        Ques: "In a finance graph, what does the term 'volume' typically refer to?",
        mcq: {
          options: [
            { no: 1, text: "Price movement", isCorrect: false },
            { no: 2, text: "Number of trades", isCorrect: true },
            { no: 3, text: "Time duration", isCorrect: false },
            { no: 4, text: "Rate of return", isCorrect: false },
          ],
        },
      },
      {
        Ques: "In a finance graph, what does a line connecting data points represent?",
        mcq: {
          options: [
            { no: 1, text: "Trend", isCorrect: true },
            { no: 2, text: "Volatility", isCorrect: false },
            { no: 3, text: " Time", isCorrect: false },
            { no: 4, text: "Volume", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the primary purpose of using a logarithmic scale on a finance graph?",
        mcq: {
          options: [
            {
              no: 1,
              text: "To compress large price movements",
              isCorrect: true,
            },
            {
              no: 2,
              text: "To exaggerate small price movements",
              isCorrect: false,
            },
            { no: 3, text: "To accurately represent time", isCorrect: false },
            { no: 4, text: "To display volume of trades", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What type of graph is commonly used to represent the distribution of returns for a portfolio of assets over time?",
        mcq: {
          options: [
            { no: 1, text: "Line graph", isCorrect: false },
            { no: 2, text: " Box plot", isCorrect: true },
            {
              no: 3,
              text: "Gantt chart",
              isCorrect: false,
            },
            { no: 4, text: "Renko chart", isCorrect: false },
          ],
        },
      },
      {
        Ques: "In a finance graph, what does the 'head and shoulders' pattern indicate?",
        mcq: {
          options: [
            {
              no: 1,
              text: " Reversal of an upward trend",
              isCorrect: true,
            },
            {
              no: 2,
              text: "Continuation of an upward trend",
              isCorrect: false,
            },
            {
              no: 3,
              text: "Reversal of a downward trend",
              isCorrect: false,
            },
            {
              no: 4,
              text: "Continuation of a downward trend",
              isCorrect: false,
            },
          ],
        },
      },
    ],
    [
      {
        Ques: "What is the primary purpose of creating a budget?",
        mcq: {
          options: [
            { no: 1, text: "To restrict spending", isCorrect: false },
            { no: 2, text: "To track income only", isCorrect: false },
            { no: 3, text: "To manage income and expenses effectively", isCorrect: true },
            { no: 4, text: "To increase debt", isCorrect: false },
          ],
        },
      },
      {
        Ques: "Why is it important to set financial goals when creating a budget?",
        mcq: {
          options: [
            { no: 1, text: "To restrict spending", isCorrect: false },
            { no: 2, text: "To have something to aim for and prioritize expenses accordingly", isCorrect: true },
            { no: 3, text: "To increase debt", isCorrect: false },
            { no: 4, text: "To track income only", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What does it mean to 'pay yourself first' when budgeting?",
        mcq: {
          options: [
            { no: 1, text: "To spend all your income on personal expenses", isCorrect: false },
            { no: 2, text: "To prioritize saving or investing a portion of your income before paying bills or expenses", isCorrect: true },
            { no: 3, text: "To delay paying bills or expenses until later", isCorrect: false },
            { no: 4, text: "To allocate all income to debt repayment", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What does the term 'emergency fund' refer to in budgeting?",
        mcq: {
          options: [
            { no: 1, text: "A fund used for daily expenses", isCorrect: false },
            { no: 2, text: "A fund used for vacations and luxury purchases", isCorrect: false },
            { no: 3, text: "A fund used to cover unexpected expenses or financial emergencies", isCorrect: true },
            { no: 4, text: "A fund used for long-term investments", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the purpose of tracking expenses in a budget?",
        mcq: {
          options: [
            { no: 1, text: "To increase spending", isCorrect: false },
            { no: 2, text: "To ignore financial goals", isCorrect: false },
            { no: 3, text: "To identify where money is being spent and make adjustments as needed", isCorrect: true },
            { no: 4, text: "To decrease income", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the difference between fixed and variable expenses in a budget?",
        mcq: {
          options: [
            { no: 1, text: "There is no difference", isCorrect: false },
            { no: 2, text: "Fixed expenses change from month to month, while variable expenses remain constant", isCorrect: false },
            { no: 3, text: "Fixed expenses are essential for survival, while variable expenses are optional", isCorrect: false },
            { no: 4, text: "Fixed expenses remain constant from month to month, while variable expenses can change", isCorrect: true },
          ],
        },
      },
      {
        Ques: "What is the '50/30/20 rule' in budgeting?",
        mcq: {
          options: [
            { no: 1, text: "A rule stating that 50% of income should be spent on housing, 30% on transportation, and 20% on entertainment", isCorrect: false },
            { no: 2, text: "A rule stating that 50% of income should be saved, 30% should be invested, and 20% can be spent freely", isCorrect: false },
            { no: 3, text: "A rule stating that 50% of income should be spent on needs, 30% on wants, and 20% on savings or debt repayment", isCorrect: true },
            { no: 4, text: "A rule stating that 50% of income should be spent on food, 30% on utilities, and 20% on healthcare", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What does the term 'sinking fund' refer to in budgeting?",
        mcq: {
          options: [
            { no: 1, text: "A fund used to cover the cost of sinking ships", isCorrect: false },
            { no: 2, text: "A fund used for retirement savings", isCorrect: false },
            { no: 3, text: "A fund used to save for a specific future expense or purchase by setting aside money regularly", isCorrect: true },
            { no: 4, text: "A fund used to cover unexpected expenses", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What does the term 'debt snowball' refer to in budgeting?",
        mcq: {
          options: [
            { no: 1, text: "A method of increasing debt", isCorrect: false },
            { no: 2, text: "A strategy for paying off debts by focusing on the smallest balances first", isCorrect: true },
            { no: 3, text: "A method of saving money", isCorrect: false },
            { no: 4, text: "A budgeting technique for large expenses", isCorrect: false },
          ],
        },
      },
      {
        Ques: "What is the purpose of reviewing and adjusting a budget regularly?",
        mcq: {
          options: [
            { no: 1, text: "To set financial goals", isCorrect: false },
            { no: 2, text: "To restrict spending", isCorrect: false },
            { no: 3, text: "To ensure that the budget reflects current financial circumstances and goals", isCorrect: true },
            { no: 4, text: "To increase debt", isCorrect: false },
          ],
        },
      },
    ],
    [
    {
      Ques: "What does the term 'nest egg' refer to in retirement planning?",
      mcq: {
        options: [
          { no: 1, text: "A fund used for daily expenses", isCorrect: false },
          { no: 2, text: "A fund used for vacations and luxury purchases", isCorrect: false },
          { no: 3, text: "A fund used to cover unexpected expenses or financial emergencies", isCorrect: false },
          { no: 4, text: "A fund set aside for retirement savings", isCorrect: true },
        ],
      },
    },
    {
      Ques: "What are some common retirement savings vehicles?",
      mcq: {
        options: [
          { no: 1, text: "Checking accounts", isCorrect: false },
          { no: 2, text: "Credit cards", isCorrect: false },
          { no: 3, text: "401(k) plans, IRAs, and employer-sponsored retirement accounts", isCorrect: true },
          { no: 4, text: "Personal loans", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What role does Social Security play in retirement planning?",
      mcq: {
        options: [
          { no: 1, text: "It is the primary source of retirement income for most people", isCorrect: false },
          { no: 2, text: "It provides supplemental income to retirement savings and pensions", isCorrect: true },
          { no: 3, text: "It is a government-run retirement savings program", isCorrect: false },
          { no: 4, text: "It is not relevant to retirement planning", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What does the term 'retirement age' refer to?",
      mcq: {
        options: [
          { no: 1, text: "The age at which one stops working and receives Social Security benefits", isCorrect: false },
          { no: 2, text: "The age at which one becomes eligible for Medicare", isCorrect: false },
          { no: 3, text: "The age at which one can access retirement savings penalty-free", isCorrect: false },
          { no: 4, text: "The age at which one typically retires from full-time employment", isCorrect: true },
        ],
      },
    },
    {
      Ques: "What are some common sources of retirement income?",
      mcq: {
        options: [
          { no: 1, text: "Social Security benefits only", isCorrect: false },
          { no: 2, text: "Savings and investments, pensions, and Social Security benefits", isCorrect: true },
          { no: 3, text: "Employment income and rental income", isCorrect: false },
          { no: 4, text: "Inheritance and gifts", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What does the term 'required minimum distribution (RMD)' refer to in retirement planning?",
      mcq: {
        options: [
          { no: 1, text: "The maximum amount one can contribute to a retirement account each year", isCorrect: false },
          { no: 2, text: "The minimum amount one must withdraw from certain retirement accounts after reaching a certain age", isCorrect: true },
          { no: 3, text: "The minimum amount one must contribute to a retirement account each year", isCorrect: false },
          { no: 4, text: "The maximum amount one can withdraw from a retirement account each year", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the purpose of retirement income planning?",
      mcq: {
        options: [
          { no: 1, text: "To restrict spending during retirement", isCorrect: false },
          { no: 2, text: "To manage income and expenses effectively", isCorrect: false },
          { no: 3, text: "To ensure a reliable and sustainable income stream during retirement years", isCorrect: true },
          { no: 4, text: "To increase debt", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What role does inflation play in retirement planning?",
      mcq: {
        options: [
          { no: 1, text: "It has no impact on retirement savings", isCorrect: false },
          { no: 2, text: "It reduces the value of retirement savings over time", isCorrect: true },
          { no: 3, text: "It increases the value of retirement savings over time", isCorrect: false },
          { no: 4, text: "It accelerates the growth of retirement savings", isCorrect: false },
        ],
      },
    },
  ],
  [
    {
      Ques: "What is the primary purpose of creating a budget?",
      mcq: {
        options: [
          { no: 1, text: "To restrict spending", isCorrect: false },
          { no: 2, text: "To track income only", isCorrect: false },
          { no: 3, text: "To manage income and expenses effectively", isCorrect: true },
          { no: 4, text: "To increase debt", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the key benefit of investing in stocks?",
      mcq: {
        options: [
          { no: 1, text: "Guaranteed returns", isCorrect: false },
          { no: 2, text: "Low risk", isCorrect: false },
          { no: 3, text: "Potential for high returns", isCorrect: true },
          { no: 4, text: "Fixed interest payments", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is a common strategy for paying off debts?",
      mcq: {
        options: [
          { no: 1, text: "Ignoring debt", isCorrect: false },
          { no: 2, text: "Paying off large debts first", isCorrect: false },
          { no: 3, text: "Focusing on smallest balances first", isCorrect: true },
          { no: 4, text: "Increasing debt through loans", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is a key component of a financial plan?",
      mcq: {
        options: [
          { no: 1, text: "Daily expenses", isCorrect: false },
          { no: 2, text: "Savings goals", isCorrect: false },
          { no: 3, text: "Long-term financial objectives", isCorrect: true },
          { no: 4, text: "Current income only", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is a common retirement savings account?",
      mcq: {
        options: [
          { no: 1, text: "Personal savings account", isCorrect: false },
          { no: 2, text: "IRA (Individual Retirement Account)", isCorrect: true },
          { no: 3, text: "Checking account", isCorrect: false },
          { no: 4, text: "401(k) account", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What does APR stand for in the context of loans?",
      mcq: {
        options: [
          { no: 1, text: "Average Percentage Rate", isCorrect: false },
          { no: 2, text: "Annual Payment Rate", isCorrect: false },
          { no: 3, text: "Annual Percentage Rate", isCorrect: true },
          { no: 4, text: "Adjusted Payment Ratio", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the purpose of diversification in investment?",
      mcq: {
        options: [
          { no: 1, text: "To focus on a single investment for maximum returns", isCorrect: false },
          { no: 2, text: "To minimize risk by spreading investments across different assets", isCorrect: true },
          { no: 3, text: "To increase debt", isCorrect: false },
          { no: 4, text: "To ignore market trends", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the difference between a stock and a bond?",
      mcq: {
        options: [
          { no: 1, text: "Stocks represent ownership in a company, while bonds represent debt", isCorrect: true },
          { no: 2, text: "Stocks have fixed returns, while bonds have variable returns", isCorrect: false },
          { no: 3, text: "Stocks pay interest, while bonds pay dividends", isCorrect: false },
          { no: 4, text: "Stocks are only issued by governments, while bonds are issued by corporations", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the purpose of asset allocation in investment?",
      mcq: {
        options: [
          { no: 1, text: "To focus on a single asset class for maximum returns", isCorrect: false },
          { no: 2, text: "To minimize risk by distributing investments across different asset classes", isCorrect: true },
          { no: 3, text: "To increase debt", isCorrect: false },
          { no: 4, text: "To ignore market trends", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What does the term 'liquidity' refer to in finance?",
      mcq: {
        options: [
          { no: 1, text: "The ability to borrow money", isCorrect: false },
          { no: 2, text: "The ability to convert assets into cash quickly without significant loss of value", isCorrect: true },
          { no: 3, text: "The profitability of investments", isCorrect: false },
          { no: 4, text: "The rate of return on investments", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the purpose of a credit score?",
      mcq: {
        options: [
          { no: 1, text: "To track income", isCorrect: false },
          { no: 2, text: "To determine eligibility for loans and credit cards", isCorrect: true },
          { no: 3, text: "To increase debt", isCorrect: false },
          { no: 4, text: "To predict stock market trends", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is the difference between a traditional IRA and a Roth IRA?",
      mcq: {
        options: [
          { no: 1, text: "Contributions to a traditional IRA are tax-deductible, while contributions to a Roth IRA are not", isCorrect: true },
          { no: 2, text: "Contributions to a Roth IRA are tax-deductible, while contributions to a traditional IRA are not", isCorrect: false },
          { no: 3, text: "Roth IRAs have required minimum distributions, while traditional IRAs do not", isCorrect: false },
          { no: 4, text: "Traditional IRAs allow tax-free withdrawals, while Roth IRAs do not", isCorrect: false },
        ],
      },
    },
  ]
  ];

  const handleClick = (option) => {
    if (!answeredQuestions.includes(questionIndex)) {
      if (option.isCorrect === true && option.no !== selectedOption?.no) {
        setSelectedOption(option);
        setCnt(option.no);
        setWrongCnt(-1);
        setScore(score + 1);
      } else if (option.isCorrect === false) {
        setWrongCnt(option.no);
        setSelectedOption(option);
      } else {
        setCnt(0);
        setWrongCnt(-1);
      }
      setAnsweredQuestions([...answeredQuestions, questionIndex]);
    }
  };

  const handlePageLeft = () => {
    if (questionIndex - 1 >= 0) setQuestionIndex(questionIndex - 1);
    setCnt(0);
    setWrongCnt(-1);
  };

  const handlePageRight = () => {
    if (questionIndex < data.length - 1) setQuestionIndex(questionIndex + 1);
    setCnt(0);
    setWrongCnt(-1);
  };
  const handleSubmit = () => {
    fetchScore();
    Swal.fire({
      icon: "success",
      title: "Your score has been submitted successfully!",
      showConfirmButton: false,
      timer: 2000, // Close the toast after 2 seconds
    }).then(() => {
      navigate("/startlearning");
    });
  };

  const data = dataArray[id];
  return (
    <div className="h-screen flex overflow-hidden bg-[#181A2E]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="absolute font-kalam text-xl md:text-3xl top-20 right-10 p-4 text-white text-xl">
          Your Score: {score}
        </div>
        <div className="flex justify-center align-center items-center h-screen md:h-full">
          {data.map(
            (item, index) =>
              questionIndex === index && (
                <div className="w-full md:w-1/2 " key={index}>
                  <div className="p-8 text-lg md:text-2xl space-y-8 align-center bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700 m-2">
                    <span className="text-xl md:text-3xl">
                      Q-{index + 1}. {item.Ques}
                    </span>

                    <div className="flex flex-col gap-5">
                      {item.mcq.options.map((option, i) => (
                        <div
                          onClick={() => handleClick(option)}
                          className="flex gap-5 align-center w-full p-2 rounded bg-gray-800 text-white"
                          key={i}
                        >
                          {cnt === option.no ? (
                            <div>
                              <CircleRoundedIcon
                                style={{ color: "green", fontSize: 12 }}
                              />
                            </div>
                          ) : wrongCnt === option.no ? (
                            <div>
                              <CircleRoundedIcon
                                style={{ color: "red", fontSize: 12 }}
                              />
                            </div>
                          ) : (
                            <div>
                              <CircleRoundedIcon style={{ fontSize: 12 }} />
                            </div>
                          )}
                          <div
                            className={`cursor-pointer flex  ${
                              answeredQuestions.includes(questionIndex)
                                ? "pointer-events-none"
                                : ""
                            }`}
                          >
                            {option.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {cnt !== 0 ? (
                      <div className="text-green-500 font-kalam">
                        Your Answer is Correct!
                      </div>
                    ) : wrongCnt !== -1 ? (
                      <>
                        <div className="text-red-500 font-kalam">
                          Your Answer is Wrong!
                        </div>
                        <div className="text-green-500 font-kalam">
                          Correct Answer: {"  "}{" "}
                          {item.mcq.options.find((opt) => opt.isCorrect)?.text}
                        </div>
                      </>
                    ) : null}

                    <div className="flex justify-center">
                      {questionIndex > 0 && (
                        <KeyboardArrowLeftIcon onClick={handlePageLeft} />
                      )}
                      {questionIndex < data.length - 1 && (
                        <KeyboardArrowRightIcon onClick={handlePageRight} />
                      )}
                    </div>
                    <button className="btn text-md md:text-xl bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Module1Q;
