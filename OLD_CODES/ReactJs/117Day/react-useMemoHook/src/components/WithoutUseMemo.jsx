import React, { useState } from "react";

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // Expensive calculation
    const expensiveCalculation = () => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) { } // Simulating heavy computation
        return count * 2;
    };

    return (
        <div>
            <h1>Without useMemo</h1>
            <p>Expensive Calculation Result: {expensiveCalculation()}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOtherCount(otherCount + 1)}>
                Increment Other Count
            </button>
            <p>Other Count: {otherCount}</p>
        </div>
    );
};

export default WithoutUseMemo;
