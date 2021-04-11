import React from "react";
import styled from "styled-components";

const StyledStartUpBig = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 95%;
  margin: 0 auto;

  button {
    flex: 1 1 31%;
    margin: 1rem;
    background: linear-gradient(
      104.61deg,
      #ff00b8 2.65%,
      #ff655b 51.83%,
      #ffc700 100%
    );
    border: 0;
    outline: 0;
    border-radius: 1rem;
    font-family: Red Hat Display;
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    transition: all 1s ease;
  }

  //QUERY
  @media screen and (max-width: 900px) {
    flex-flow: column;
  }
`;

const StartUpBig = () => {
  return (
    <StyledStartUpBig>
      <button>Advise A StartUp</button>
      <button>
        Join Minority <br />
        Ventures Cohort
      </button>
      <button>Help Code</button>
    </StyledStartUpBig>
  );
};

export default StartUpBig;
