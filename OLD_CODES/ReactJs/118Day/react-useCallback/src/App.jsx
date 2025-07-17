import React from 'react'
import ChildButton from './components/ChildButton'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <Parent />
      <ChildButton />
    </div>
  )
}

export default App