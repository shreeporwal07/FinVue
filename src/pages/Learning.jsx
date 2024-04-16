import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const modules = [
    { id: 1, title: 'Basic Question on Finance', path: `/mod1q/0` },
    { id: 2, title: 'Basic Question on Graph', path: `/mod1q/1` },
    { id: 3, title: 'Basic Question on Budgeting', path: `/mod1q/2` },
    { id: 4, title: 'Basic Question on Retirement Planning', path: `/mod1q/3` },
    { id: 5, title: 'Basic Question on Risk Management', path: `/mod1q/4` }
];

const Learning = () => {
    const [totalscore, setTotalScore] = useState(0);
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const userId = user?.sub;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [score, setScore] = useState([]);
    const fetchScore = async () => {
        console.log('faga');
        if (userId) { // Check if userId is defined
            try {
                const { data } = await axios.get(`http://localhost:3000/getScore/${userId}`);
                console.log(data);
                // Extract the score array from the response data
                const userScore = data.user[0].score;
                let cnt = 0;
                for (let i = 0; i < data.user[0].score.length; i++) {
                    cnt += totalscore + data.user[0].score[i];
                }
                setTotalScore(cnt);
                setScore(userScore);
            } catch (err) {
                console.log(err);
            }
        }
    };
    useEffect(() => {
        fetchScore();
    }, [user]);
    useEffect(() => {
        fetchScore();
    }, [])
    console.log("score", score);
    return (
        <div className="flex h-screen overflow-hidden bg-[#181A2E]">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="m-10">
                    <span className="font-kalam text-2xl md:text-5xl text-slate-100 font-bold mb-8">Start Learnings</span>
                    <div className="relative bg-gray-200 w-full h-6 rounded">
                        <div className="flex justify-center absolute top-0 left-0 h-full bg-green-500 rounded" style={{ width: `${Math.min(totalscore, 50)}%`, transition: 'width 1s ease-in-out' }}></div>
                    </div>

                    <div className="flex flex-col mt-4 gap-10">
                        {modules.map(module => (
                            <div key={module.id} className="flex py-5 px-5  flex-col gap-10 col-span-full xl:col-span-6 bg-gradient-to-r from-[#434974] to-[#242949] shadow-lg rounded-lg border border-slate-700">
                                <Link to={isAuthenticated ? module.path : ''} onClick={isAuthenticated ? undefined : loginWithRedirect}>
                                    <div className="flex justify-between ">
                                        <span className="text-2xl cursor-pointer">{module.title}</span>
                                        {user ? (<span className="text-xl">{score && score[module.id - 1] ? <>{(score[module.id - 1])}/10</> : <></>}</span>) : <></>}
                                    </div>

                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learning;
