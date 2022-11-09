import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShopDashboard from './pages/ShopDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShopDashboard titulo="ShopDashboard"></ShopDashboard>
    </div>
  )
}

export default App
