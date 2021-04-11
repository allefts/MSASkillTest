import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledStartUpCard = styled.div`
  height: 100%;
  background: white;
  border-radius: 60px;

  padding: 2rem;

  .imgWrapper {
    height: 30%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .imgBg{
    width: 100%;
    height: 100%:
  }

  .cardText {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }

  .projectDesc {
    margin-bottom: 10px;
  }

  .fundMeter {
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

  .startUpBtns {
    display: flex;
    justify-content: space-evenly;
  }

  .giveBtn,
  .learnBtn {
    margin: 0 3px;
    color: white;
    text-align: center;
    padding: 0.5rem 1.5rem;
    font-weight: bold;
    font-size: 1.2em;
    border: none;
    outline: none;
    font-family: Red Hat Display;
    text-transform: uppercase;
    border-radius: 40px;
    cursor: pointer;
  }

  .giveBtn {
    background: linear-gradient(
      104.61deg,
      #ff00b8 2.65%,
      #ff655b 51.83%,
      #ffc700 100%
    );
  }

  .learnBtn {
    background: linear-gradient(
      82deg,
      rgba(222, 2, 174, 1) 0%,
      rgba(57, 15, 123, 1) 100%
    );
  }

  // .learnBtn > * {
  //   text-decoration: none;
  //   color: inherit;
  // }

  .percentFunded {
    float: right;
  }
`;

const StartUpCard = ({
  ProjectName,
  ProjectDescription,
  ProjectLogo,
  CurrentFunding,
  FundingGoal,
  GiveLink,
  LearnLink,
}) => {
  return (
    <div
      className="cardWrapper"
      style={{
        background:
          "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
        padding: "4px",
        borderRadius: "63px",
        width: "80%",
        margin: "auto",
        height: "300px",
      }}
    >
      <StyledStartUpCard>
        {/* <h1 className="projectTitle">{ProjectName}</h1> */}
        <div className="imgWrapper">
          <img src={ProjectLogo} alt="Logo" className="projLogo" />
        </div>
        <p className="projectDesc">{ProjectDescription}</p>
        <div className="cardText">
          <div className="startUpBtns">
            <button className="giveBtn">{GiveLink}</button>
            <Link to="/learn">
              <button className="learnBtn">{LearnLink}</button>
            </Link>
          </div>
          <div className="fundingWrapper">
            <h3 className="currentFunding">{CurrentFunding}</h3>
            <div className="fundMeter"></div>
            <p className="percentFunded">{FundingGoal}</p>
          </div>
        </div>
      </StyledStartUpCard>
    </div>
  );
};

export default StartUpCard;
