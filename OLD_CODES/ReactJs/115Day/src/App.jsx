import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='container w-full min-h-[84vh] px-4 py-4 mx-auto md:px-24'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App