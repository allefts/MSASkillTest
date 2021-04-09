import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div`
  padding: 2rem;
  text-align: center;
  border-radius: 60px;
  background: white;
  max-width: 350px;
  height: 350px;
  display: grid;
  place-items: center;

  .cardTitle {
    font-size: 3rem;
    color: #151371;
    font-weight: 400;
    margin-bottom: 10px;
  }

  img {
    width: 80%;
  }
`;

const CategoryCard = ({ title, imageSrc }) => {
  return (
    <div
      className="categoryCardWrapper"
      style={{
        background:
          "linear-gradient(104.61deg, rgb(255, 0, 184) 2.65%, rgb(255, 101, 91) 51.83%, rgb(255, 199, 0) 100%)",
        padding: "4px",
        borderRadius: "63px",
      }}
    >
      <StyledCategory>
        <h1 className="cardTitle">{title}</h1>
        <img src={imageSrc} alt="Gears" />
      </StyledCategory>
    </div>
  );
};

export default CategoryCard;
