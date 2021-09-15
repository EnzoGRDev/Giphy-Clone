import { LOGIN_URL } from 'services/settings'

export default function loginService (username, password) {
  return (
    fetch(LOGIN_URL,{
      headers:{
        "Content-Type":"application/json"
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    })
  )
}