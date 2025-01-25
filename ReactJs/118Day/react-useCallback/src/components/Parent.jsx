import React, { useState, useCallback } from 'react';
import ChildButton from './ChildButton';

const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Memoized function using useCallback
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <ChildButton onClick={increment} />

            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

export default Parent;
