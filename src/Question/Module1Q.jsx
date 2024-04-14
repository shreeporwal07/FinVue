import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const Learning = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [cnt, setCnt] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [wrongCnt, setWrongCnt] = useState(-1);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Reset selected option when question changes
  useEffect(() => {
    setSelectedOption(null);
  }, [questionIndex]);
  const data = [
    {
      Ques: "What is the primary goal of financial management?",
      mcq: {
        options: [
          { no: 1, text: "Maximizing shareholder wealth", isCorrect: true },
          { no: 2, text: "Maximizing employee satisfaction", isCorrect: false },
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
          { no: 4, text: "To oversee production operations", isCorrect: false },
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

  return (
    <div className="flex overflow-hidden bg-[#181A2E]">
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
                            className={`cursor-pointer flex  ${answeredQuestions.includes(questionIndex)
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
                          Correct Answer: {"  "} {item.mcq.options.find(opt => opt.isCorrect)?.text}
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
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Learning;
