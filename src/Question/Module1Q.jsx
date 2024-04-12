import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

const Learning = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [cnt, setCnt] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [wrongCnt, setWrongCnt] = useState(0);
    const data = [
        {
            "Ques": "what is your name",
            "mcq": {
                "options": [
                    { "no": 1, "text": "leena", "isCorrect": true },
                    { "no": 2, "text": "jatin", "isCorrect": false },
                    { "no": 3, "text": "shree", "isCorrect": false },
                    { "no": 4, "text": "zeel", "isCorrect": false }
                ]
            }
        },
        {
            "Ques": "what is your name",
            "mcq": {
                "options": [
                    { "no": 1, "text": "dfag", "isCorrect": true },
                    { "no": 2, "text": "jatin", "isCorrect": false },
                    { "no": 3, "text": "shree", "isCorrect": false },
                    { "no": 4, "text": "zeel", "isCorrect": false }
                ]
            }
        },
        {
            "Ques": "what is your name",
            "mcq": {
                "options": [
                    { "no": 1, "text": "dfag", "isCorrect": true },
                    { "no": 2, "text": "jatin", "isCorrect": false },
                    { "no": 3, "text": "shree", "isCorrect": false },
                    { "no": 4, "text": "zeel", "isCorrect": false }
                ]
            }
        },
    ];

    const handleClick = (option) => {
        if (option.isCorrect === true) {
            setSelectedOption(option);
            setCnt(option.no);
            setWrongCnt(-1);
        } else if (option.isCorrect === false) {
            setWrongCnt(option.no);
            setSelectedOption(option);
            setCnt(0);
        } else {
            setCnt(0);
        }
    };

    const handlePageLeft = () => {
        if(questionIndex-1>=0)
        setQuestionIndex(questionIndex - 1);
    };

    const handlePageRight = () => {
        if(questionIndex+1<data.length)
        setQuestionIndex(questionIndex + 1);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="px-20 py-10">
                    {data.map((item, index) => (
                        questionIndex === index && (
                            <div className="py-5" key={index}>
                                <div className="flex py-5 px-5 flex-col gap-5 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                                    <span className="text-xl">{index + 1} {item.Ques}</span>
                                    <div>
                                        {item.mcq.options.map((option, i) => (
                                            <div className="flex gap-2 align-center" key={i}>
                                                {cnt === option.no ? (
                                                    <div>
                                                        <CircleRoundedIcon style={{ color: 'green', fontSize: 12 }} />
                                                    </div>
                                                ) : (
                                                    wrongCnt === option.no ? (
                                                        <div>
                                                            <CircleRoundedIcon style={{ color: 'red', fontSize: 12 }} />
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <CircleRoundedIcon style={{ fontSize: 12 }} />
                                                        </div>
                                                    )
                                                )}
                                                <div onClick={() => handleClick(option)} className="cursor-pointer flex">{option.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {cnt !== 0 && <div>{selectedOption.text}</div>}
                                    <div className="flex justify-center">
                                        <KeyboardArrowLeftIcon onClick={handlePageLeft} />
                                        <KeyboardArrowRightIcon onClick={handlePageRight} />
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Learning;
