import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Dashboard from './components/Dashboard/Dashboard'
import SignupForm from './components/SignupForm/SignupForm' // import the SignupForm
import SigninForm from './components/SigninForm/SigninForm'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = authService.getUser()  // Get user from localStorage
    if (storedUser) setUser(storedUser)  // If a user is found, set it in state
  }, [])
  
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

return (
  <>
     <NavBar user={user} handleSignout={handleSignout} /> 
    <Routes>
      {
        user ?
          <Route path="/" element={<Dashboard user={user} />} />
        :
          <Route path="/" element={<Landing />} />
      }

      <Route path='/signup' element={<SignupForm setUser={setUser}/>} /> // import the signup form here
      <Route path='/signin' element={<SigninForm setUser={setUser}/>} />
      </Routes>
  </>
)}

export default App