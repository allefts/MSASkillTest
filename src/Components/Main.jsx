import React from "react";
import styled from "styled-components";

import Banner from "./Banner";

const StyledMain = styled.div`
  background-color: white;
  width: 98%;
  margin: 2rem auto;

  //For now
  height: 100vh;

  border-radius: 40px;
  padding-top: 2rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <Banner />
    </StyledMain>
  );
};

export default Main;
