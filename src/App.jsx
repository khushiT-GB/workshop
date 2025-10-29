import { useState } from 'react'
import './App.css'
import QuantumSummitLanding from './component/QuantumSummitLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QuantumSummitLanding />
    </>
  )
}

export default App
