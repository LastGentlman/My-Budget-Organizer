import { useState } from 'react'
import Login from './components/login'
import Dashboard from './views/Dashboard'

const App:React.FC = () => {
  const [english, setEnglish] = useState(true) // if false = spanish

  return (
    <>
      {/* <Login eng={english} /> */}
      <Dashboard eng={english} />
    </>
  )
}

export default App
