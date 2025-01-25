import React, { useState, useMemo } from "react";

const WithUseMemo = () => {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // Memoized expensive calculation
    const memoizedCalculation = useMemo(() => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) { } // Simulating heavy computation
        return count * 2;
    }, [count]); // Only re-run the calculation when `count` changes

    return (
        <div>
            <h1>With useMemo</h1>
            <p>Expensive Calculation Result: {memoizedCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setOtherCount(otherCount + 1)}>
                Increment Other Count
            </button>
            <p>Other Count: {otherCount}</p>
        </div>
    );
};

export default WithUseMemo;
