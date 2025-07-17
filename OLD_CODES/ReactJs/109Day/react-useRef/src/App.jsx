import React from 'react';
import CounterApp from './components/CounterApp';
import InputFocusExample from './components/InputFocusExample';
import RenderCounter from './components/RenderCounter';
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  return (
    <>
      <CounterApp />
      <br /> <hr /> <br />
      <InputFocusExample />
      <br /> <hr /> <br />
      <RenderCounter />
      <br /> <hr /> <br />
      <CountdownTimer />
    </>
  )
}

export default App;