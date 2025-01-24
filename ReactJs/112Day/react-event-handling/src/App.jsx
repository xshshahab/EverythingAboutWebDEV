import React from 'react'
import ClickEvent from './components/ClickEvent'
import MouseOverEvent from './components/MouseOverEvent'
import OnChangeEvent from './components/OnChangeEvent'
import HandleForm from './components/HandleForm'
import FormHandle from './components/FormHandle'

const App = () => {

  return (
    <div className='app'>
      <h1>My App</h1>
      <ClickEvent />
      <OnChangeEvent />
      <br /><br />
      <br /><br />
      <FormHandle />

      <br /><br />
      <br /><br />
      <MouseOverEvent />
      <br /><br />
      <HandleForm />
    </div>
  )
}

export default App