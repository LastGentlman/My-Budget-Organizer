import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/login'

const App:React.FC = () => {
  const [english, setEnglish] = useState(true)

  return (
    <>
      <Login eng={english} />
    </>
  )
}

export default App
