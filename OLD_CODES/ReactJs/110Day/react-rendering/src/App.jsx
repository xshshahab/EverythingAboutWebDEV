import React, { useState } from 'react'
import Button from './components/Button'
import Todos from './components/Todos';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hasNotifications = true;

  const onClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className='app'>
      {isLoggedIn ? <h1>Welcome back Syphar!</h1> : <h1>Please sign in.</h1>}
      {
        !isLoggedIn ? <Button onClick={onClick} title={"sign in"} /> : <Button title={"sign out"} onClick={onClick} />
      }
      <br />
      <br />

      {hasNotifications && <p>You have new notifications!</p>}

      <Todos />
    </div>
  )
}

export default App