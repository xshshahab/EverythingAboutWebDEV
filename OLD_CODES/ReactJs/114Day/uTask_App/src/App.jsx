import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todos/Todo'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Todo />
      <Footer />
    </div>
  )
}

export default App