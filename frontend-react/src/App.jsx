import { useState } from 'react'
import { Navbar } from "./components/Navbar"
import { LoginForm } from './components/LoginForm'
import "./css/loginStyles.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  )
}

export default App
