import React from "react";
import styled from "styled-components";
import WorldImg from "../Assets/Images/world.png";
import PeopleImg from "../Assets/Images/Group.png";
import ButterflyImg from "../Assets/Images/butterfly.png";
import "../App.css";

const StyledBanner = styled.div`
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );

  display: flex;
  flex-flow: row;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: relative;

  .bannerTitle {
    font-size: 4rem;
  }

  .bannerTitle:first-child {
    display: inline-block;
  }

  .bannerPower {
    float: right;
  }

  /* IMAGES */
  .worldImage {
    width: 20%;
    animation: rotateWorld 10s infinite;
    animation-timing-function: linear;
  }

  @keyframes rotateWorld {
    0%,
    100% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(360deg);
    }
  }

  @media screen and (max-width: 1620px) {
    .peopleImage,
    .butterflyImage {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    .bannerTitle {
      font-size: 2rem;
    }
  }
`;

const Banner = ({ phrase1, phrase2 }) => {
  return (
    <StyledBanner>
      {/* <div className="bannerBg"> */}
      <img className="worldImage" src={WorldImg} alt="Earth" />
      <img className="butterflyImage" src={ButterflyImg} alt="Butterfly" />
      <div className="bannerText">
        <h1 className="bannerTitle">{phrase1}</h1>{" "}
        <img src={PeopleImg} className="peopleImage" alt="People" />
        <h1 className="bannerTitle">{phrase2}</h1>
        <h2 className="bannerPower">
          <i> powered by KoinStreet </i>{" "}
        </h2>{" "}
      </div>{" "}
      {/* </div> */}
    </StyledBanner>
  );
};

export default Banner;
