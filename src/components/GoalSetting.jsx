import React, { useState } from 'react';

function GoalSetting() {
    const [goalAmount, setGoalAmount] = useState('');
    const [deadline, setDeadline] = useState('');
    const [goalSet, setGoalSet] = useState(false);

    const handleSetGoal = () => {
        if (goalAmount && deadline) {
            setGoalSet(true);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#434974] to-[#242949] p-4 rounded-lg text-white justify-between items-center">
            <h2 className="text-xl font-semibold">Goal Setting</h2>
            {!goalSet ? (
                <>
                    <label htmlFor="goalAmount" className="text-white block mt-3">Goal Amount:</label>
                    <input
                        id="goalAmount"
                        type="number"
                        value={goalAmount}
                        onChange={(e) => setGoalAmount(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                    <label htmlFor="deadline" className="text-white block mt-3">Deadline:</label>
                    <input
                        id="deadline"
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white"
                    />
                    <button onClick={handleSetGoal} className="mt-4 pl-4 pr-4 text-xl btn bg-[#8C52FF] hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white">Set Goal</button>
                </>
            ) : (
                <p className="text-green-500 text-lg md:text-xl mt-8 font-kalam">Goal set! <br/>Save ${goalAmount} by {deadline}.</p>
            )}
        </div>
    );
}

export default GoalSetting;
