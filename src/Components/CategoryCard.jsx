import React from "react";
import styled from "styled-components";
import "../App.css";

const StyledCategory = styled.div`
  flex: 1 1 25%;
  padding: 1.5rem;
  text-align: center;
  border-radius: 60px;
  background: white;
  width: 350px;
  height: 350px;
  display: grid;
  place-items: center;
  overflow: hidden;

  .cardTitle {
    font-size: 3rem;
    color: #151371;
    font-weight: 400;
  }

  .imgContainer {
    width: 200px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
        margin: "1rem",
      }}
    >
      <StyledCategory>
        <h1 className="cardTitle">{title}</h1>
        <div className="imgContainer">
          <img src={imageSrc} alt="Gears" />
        </div>
      </StyledCategory>
    </div>
  );
};

export default CategoryCard;
