import React from 'react'
import WithoutUseMemo from './components/WithoutUseMemo'
import WithUseMemo from './components/WithUseMemo'

const App = () => {
  return (
    <>
      <WithoutUseMemo />
      <WithUseMemo />
    </>
  )
}

export default App