import "./App.css";
// import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
