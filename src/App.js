import "./App.css";
// import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
