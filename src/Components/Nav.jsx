import React from "react";
import styled from "styled-components";

//ICONS
import { VscTwitter } from "react-icons/vsc";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const StyledNav = styled.nav`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;

  .navIcons {
    display: flex;
    justify-content: space-between;

    .icon {
      color: rgba(103, 101, 101, 1);
      font-size: 2rem;
      margin: 0 1.5rem;
    }
  }

  //BUTTON
  .navButton {
    padding: 0.5rem;
    border-radius: 10px;
    border: 3px solid;
    border-image-source: linear-gradient(
      104.61deg,
      #ff00b8 2.65%,
      #ff655b 51.83%,
      #ffc700 100%
    );
    border-image-slice: 1;

    background: -webkit-linear-gradient(
      104.61deg,
      #ff00b8 2.65%,
      #ff655b 51.83%,
      #ffc700 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }

  //NAVLINKS
  .navLinks {
    display: flex;
    align-items: center;
    flex-flow: row;
    list-style: none;

    .navLink {
      color: #676565;
      font-weight: bolder;
      margin: 0 1.5rem;
    }

    .searchButton {
      background-color: #151371;
      padding: 1rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      z-index: 1;

      .searchIcon {
        color: white;
      }
    }
  }

  .searchButton::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #151371;
    transform: translateX(-5px);
    z-index: -1;
    transition: all 1s ease-in-out;

    &:hover {
      transform: translateX(0px);
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <div className="navIcons">
        <VscTwitter className="icon" />
        <AiFillFacebook className="icon" />
        <AiFillLinkedin className="icon" />
        <AiOutlineInstagram className="icon" />
      </div>
      <button className="navButton">Connect Wallet</button>
      <ul className="navLinks">
        <li className="navLink">Service</li>
        <li className="navLink">Events</li>
        <li className="navLink">Learn</li>
        <li className="navLink">Join</li>
        <div className="searchButton">
          <BsSearch className="searchIcon" />
        </div>
      </ul>
    </StyledNav>
  );
};

export default Nav;
