import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './views/Dashboard'
import NewTransaction from './views/NewTransaction'

const App:React.FC = () => {
  const [english, setEnglish] = useState(true) // if false = spanish

  const [currensy, setCurrensy] = useState('$')

  
  function changeLanguage(): void {
    setEnglish(!english)
  }
  
  function changeCurrency(simbol: string): void {
    setCurrensy(simbol)
    // dlr, peso, euro, libra, yuan, rublo, rupia
    // ['U$D', MXN, '€', '£', '¥', '₽', '₹']
  }

  return (
    <>
      {/* <Login eng={english} /> */}
      <NewTransaction eng={english} currensy={currensy}/>
    </>
  )
}

export default App
