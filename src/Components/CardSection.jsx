import React from "react";
import styled from "styled-components";

import Card from "./CourseCards";

const StyledCardSection = styled.div`
  padding: 0 2rem;

  .myCourses {
    color: #151371;
    font-size: 3.5rem;
    font-weight: 700;
    margin: 20px 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const CardSection = ({ title }) => {
  return (
    <StyledCardSection>
      <h1 className="myCourses">{title}</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledCardSection>
  );
};

export default CardSection;
