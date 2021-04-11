import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  flex: 1 1 100%;
  padding: 1.5rem;
  border-radius: 60px;
  background: white;
  max-width: 400px;

  .cardEarn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: right;
    width: 40%;
    padding: 0 15px;
    border-radius: 20px;
    background: rgb(156, 255, 131);
  }

  .circle {
    background: #00d247;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  .cardTitle {
    font-size: 3rem;
    font-weight: bolder;
  }

  .cardBtn {
    background: linear-gradient(
      82deg,
      rgba(222, 2, 174, 1) 0%,
      rgba(57, 15, 123, 1) 100%
    );

    border: none;
    width: 100%;
    padding: 0.5rem;
    border-radius: 40px;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: Red Hat Display;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
  }

  .cardDesc {
    font-size: 1.25rem;
  }

  .cardMod {
    text-align: end;
  }

  .cardMeter {
    width: 100%;
    padding: 0.5rem;
    border-radius: 40px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgb(224, 224, 224);
      border-radius: 40px;
    }

    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-radius: 40px;
      width: 83%;
      background: linear-gradient(
        104.61deg,
        #ff00b8 2.65%,
        #ff655b 51.83%,
        #ffc700 100%
      );
    }
  }

  .cardComplete {
    text-align: end;
  }
`;

const Card = () => {
  return (
    <div
      className="cardWrapper"
      style={{
        padding: "4px",
        margin: "10px",
        background:
          "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)    ",
        borderRadius: "63px",
      }}
    >
      <StyledCard>
        <div className="cardEarn">
          <div className="circle"></div>
          <p>Earn $30</p>
        </div>
        <h1 className="cardTitle">Intro to Blockchain</h1>
        <p className="cardDesc">blockchain, cryptocurrency fundamentals</p>
        <button className="cardBtn">Learn</button>
        <h3 className="cardMod">8.3/10 Modules</h3>
        <div className="cardMeter"></div>
        <p className="cardComplete">83% Complete</p>
      </StyledCard>
    </div>
  );
};

export default Card;
