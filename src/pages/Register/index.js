import './index.css'
import { useState } from 'react'
import { REGISTER_URL } from 'services/settings'
import { useLocation } from 'wouter'

export default function Register(){
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false);
  const [, changeLocation] = useLocation()

  const changeName = ({target}) => setName(target.value)

  const changeUsername = ({target}) => setUsername(target.value)

  const changePassword = ({target}) => setPassword(target.value)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(REGISTER_URL,{
      headers : {"Content-Type": "application/json"},
      method : "POST",
      body : JSON.stringify({
        name,
        username,
        password
      })
    })
    .then(changeLocation('/login'))
    .catch(setError(true))
  }

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="name"
        placeholder="Tilin"
        value={name}
        onChange={changeName}
      />
      <label htmlFor="username">Nombre de usuario</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={changeUsername}
        placeholder="example123"
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        placeholder="••••••"
        value={password}
        onChange={changePassword}
      />
      <button>Registrarse</button>
    </form>
  );
}