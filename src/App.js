import "./App.css";
import { Link, Route } from "wouter";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import NotFound from "pages/NotFound";
import Login from "pages/Login"
import { GifsProvider } from "context/GifsContext";
import UserContextProvider from "context/UserContext";
import Register from "pages/Register";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <main className="App-content">
          <Header/>
          <Link to="/">
            <h1 className="Title" title="Home">
              Giffy
            </h1>
          </Link>
          <GifsProvider>
            <Route component={Home} path="/"/>
            <Route component={Login} path="/login"/>
            <Route component={Register} path="/register"/>
            <Route component={SearchResults} path="/search/:keyword"/>
            <Route component={Detail} path="/gif/:id"/>
          </GifsProvider>
          <Route component= {NotFound} path="/404"/>
        </main>
      </UserContextProvider>
    </div>
  )
}

export default App;
