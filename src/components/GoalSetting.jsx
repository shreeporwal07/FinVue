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
        <div className="p-5">
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
                    <button onClick={handleSetGoal} className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Set Goal</button>
                </>
            ) : (
                <p className="text-white mt-3">Goal set! Save ${goalAmount} by {deadline}.</p>
            )}
        </div>
    );
}

export default GoalSetting;
