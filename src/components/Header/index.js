import 'components/Header/index.css'
import {Link} from 'wouter'
import useUser from 'hooks/useUser'

export default function Header (){
  const {isLogged, logout} = useUser()

  return(
    <header className="header-main">
      {
        !isLogged 
          ? 
          <Link to="/login">
            Login
          </Link>
          :
          <button onClick={logout}>
            Logout
          </button>
      }
    </header>
  )
}