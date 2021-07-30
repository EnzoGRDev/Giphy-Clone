import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Context from "./context/StaticContext";
import { GifsProvider } from "context/GifsContext";
function App() {
  return (
    <Context.Provider value={2}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1 className="Title" title="Home">Giffy</h1>
          </Link>
          <GifsProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
