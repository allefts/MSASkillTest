import React from "react";
import styled from "styled-components";
import WorldImg from "../Assets/Images/Group (2).png";
import PeopleImg from "../Assets/Images/Group.png";
import ButterflyImg from "../Assets/Images/Group (1).png";

const StyledBanner = styled.div`
  background: linear-gradient(
    104.61deg,
    #ff00b8 2.65%,
    #ff655b 51.83%,
    #ffc700 100%
  );
  display: flex;
  flex-flow: row;
  max-height: 500px;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: relative;

  .bannerTitle {
    font-size: 4rem;
  }

  .bannerPower {
    float: right;
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <img src={WorldImg} alt="Earth" />
      <img src={ButterflyImg} alt="Butterfly" />
      <div className="bannerText">
        <img src={PeopleImg} alt="People" />
        <h1 className="bannerTitle">
          Learn high in <br /> Demand IT Skills & earn crypto
        </h1>
        <h2 className="bannerPower">
          <i>powered by KoinStreet</i>
        </h2>
      </div>
    </StyledBanner>
  );
};

export default Banner;