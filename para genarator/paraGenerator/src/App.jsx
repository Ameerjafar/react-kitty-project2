import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ParagraphGenerator } from './Component/ParagraphGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParagraphGenerator></ParagraphGenerator>
    </>
  )
}

export default App
