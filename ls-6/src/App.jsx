import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadDocs from "./components/LoadDocs/LoadDocs.jsx";
import Counter from "./components/Counter/Counter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LoadDocs/>
        <Counter/>
    </>
  )
}

export default App
