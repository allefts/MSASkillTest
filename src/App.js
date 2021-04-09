import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import CardSection from "./Components/CardSection";
import CategorySection from "./Components/CategorySection";

const StyledMain = styled.div`
  background-color: white;
  width: 98%;
  margin: 2rem auto;
  padding: 2rem 0;

  //For now

  border-radius: 40px;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <StyledMain>
              <Banner />
            </StyledMain>
          </Route>
          <Route exact path="/learn">
            <Nav />
            <StyledMain>
              <Banner />
              <CardSection title="My Courses" />
              <CardSection title="Featured Courses" />
              <CategorySection />
            </StyledMain>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
