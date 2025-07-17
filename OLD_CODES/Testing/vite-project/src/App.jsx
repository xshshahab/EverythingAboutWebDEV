import React from 'react';
import './App.css';
import ParticlesBackground from './ParticlesBackground';

function App() {
  return (
    <div className="">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


      <div className='relative z-10 text-xl text-white'>
        <h1>Welcome to My React App</h1>
      </div>
    </div>
  );
}

export default App;
