import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import CardSection from "./CardSection";
import CategoryCard from "./CategoryCard";

const StyledMain = styled.div`
  background-color: white;
  width: 98%;
  margin: 2rem auto;

  //For now
  //   height: 100vh;

  border-radius: 40px;
  padding-top: 2rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <Banner />
      <CardSection title="My Courses" />
      <CardSection title="Featured Courses" />
    </StyledMain>
  );
};

export default Main;
