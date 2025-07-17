import React from 'react';

// React.memo prevents unnecessary re-renders
const ChildButton = React.memo(({ onClick }) => {
    console.log('ChildButton rendered!');
    return <button onClick={onClick}>Increment Count</button>;
});

export default ChildButton;
