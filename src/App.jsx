import { useState } from 'react'

import './App.css'
import Use from './Component/Use'
import UserContext from './context/userContext'
import UserContextProvider from './context/UserContextProvider'
import LogIn from './Component/LogIn'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
<UserContextProvider>
  <h1>React with ContextApi</h1>
  <LogIn/>
  <Profile/>
</UserContextProvider>
   </>
  )
}

export default App
