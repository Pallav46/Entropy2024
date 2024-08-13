import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Trailer from './pages/Home/Trailer/Trailer'
import Cursor from './pages/Home/Cursor/Cursor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cursor/>
      <Trailer/>
    </>
  )
}

export default App
