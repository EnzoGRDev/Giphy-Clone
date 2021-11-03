import './index.css'
import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import useUser from 'hooks/useUser'

export default function Login(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [, changeLocation] = useLocation()
  const {login, isLogged, isError} = useUser()

  const handleUsernameChange = e=> setUsername(e.target.value)
  const handlePasswordChange = e=> setPassword(e.target.value)
  const handleSubmit = e=> {
    e.preventDefault()
    login(username, password)
  }
  
 
  if (isLogged)changeLocation("/")
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      {isError && <h3 >Usuario o contraseña incorrectos</h3>}
      <label htmlFor="username">Username</label>
      <input 
        type="text" 
        placeholder="example123" 
        name="username" 
        onChange={handleUsernameChange} 
        value={username}
      />
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        placeholder="••••••" 
        name="password" 
        onChange={handlePasswordChange} 
        value={password} 
      />
      <button>Login</button>
      <span>¿Aún no tienes cuenta?  
        <Link 
          to="/register" 
          className="form-login__link-register">
           Registrate
        </Link>
      </span>
    </form>
  )
}