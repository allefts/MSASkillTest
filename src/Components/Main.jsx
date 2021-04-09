import React from "react";
import styled from "styled-components";

import Banner from "./Banner";
import CardSection from "./CardSection";
import CategorySection from "./CategorySection";

const StyledMain = styled.div`
  background-color: white;
  width: 98%;
  margin: 2rem auto;
  padding: 2rem 0;

  //For now

  border-radius: 40px;
`;

const Main = () => {
  return (
    <StyledMain>
      <Banner />
      <CardSection title="My Courses" />
      <CardSection title="Featured Courses" />
      <CategorySection />
    </StyledMain>
  );
};

export default Main;
