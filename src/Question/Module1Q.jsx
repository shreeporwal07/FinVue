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
      Ques: "What is your name?",
      mcq: {
        options: [
          { no: 1, text: "Leena", isCorrect: true },
          { no: 2, text: "Jatin", isCorrect: false },
          { no: 3, text: "Shree", isCorrect: false },
          { no: 4, text: "Zeel", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is your name?",
      mcq: {
        options: [
          { no: 1, text: "Dfag", isCorrect: true },
          { no: 2, text: "Jatin", isCorrect: false },
          { no: 3, text: "Shree", isCorrect: false },
          { no: 4, text: "Zeel", isCorrect: false },
        ],
      },
    },
    {
      Ques: "What is your name?",
      mcq: {
        options: [
          { no: 1, text: "Dfag", isCorrect: true },
          { no: 2, text: "Jatin", isCorrect: false },
          { no: 3, text: "Shree", isCorrect: false },
          { no: 4, text: "Zeel", isCorrect: false },
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
    if (questionIndex < data.length) setQuestionIndex(questionIndex + 1);
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
                <div className="w-full md:w-1/2" key={index}>
                  <div className="p-8 text-lg md:text-2xl space-y-8 align-center bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700 m-2">
                    <span className="text-xl md:text-3xl">
                      Q-{index + 1}. {item.Ques}
                    </span>

                    <div>
                      {item.mcq.options.map((option, i) => (
                        <div className="flex gap-2 align-center" key={i}>
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
                            onClick={() => handleClick(option)}
                            className={`cursor-pointer flex ${
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
                      <div className="text-red-500 font-kalam">
                        Your Answer is Wrong!
                      </div>
                    ) : null}

                    <div className="flex justify-center">
                      <KeyboardArrowLeftIcon onClick={handlePageLeft} />
                      <KeyboardArrowRightIcon onClick={handlePageRight} />
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
