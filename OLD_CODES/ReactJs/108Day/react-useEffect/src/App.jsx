import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Hey, Welcome to Syphar Website!")
    console.log("Hey, Welcome !")
  }, [])

  useEffect(() => {
    alert(`Count has been updated to ${count}`)
    console.log(`Count has been updated to ${count}`)
  }, [count])

  return (
    <div>
      <h1>Welcome to Syphar Website!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App