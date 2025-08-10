import React from 'react'
import User from './components/User'

const App = () => {
  const student={
    name:"Jhon Wick",
    age:34,
    course:"Fighter"
  }
  return (
    <User  data={student}/>

  )
}

export default App