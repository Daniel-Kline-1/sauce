import logo from "./logo.svg";
import Home from "./pages/home";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import DirtyDan from "./pages/dirty-dan";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/dirty-dan" component={DirtyDan} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
