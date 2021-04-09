import React from "react";
import styled from "styled-components";

// IMAGES
import MangoSwap from "../Assets/Images/mangoswap.png";
import OroVault from "../Assets/Images/orovault.png";
import MTTLogo from "../Assets/Images/MTTlogo.png";
import MVC from "../Assets/Images/MVC.png";

const StyledStartUpSection = styled.div``;

const StartUpSection = () => {
  const FundingGoalString = "83% Funded";
  const CurrentFundingString = "$83,000/$100,000";
  const give = "GIVE";
  const learn = "LEARN";

  const startUpCards = [
    {
      ProjectName: "Oro Vault",
      ProjectDescription: "changing the way you gold forever",
      ProjectLogo: OroVault,
      CurrentFunding: CurrentFundingString,
      FundingGoal: FundingGoalString,
      GiveLink: give,
      LearnLink: learn,
    },
    {
      ProjectName: "Mango Swap",
      ProjectDescription: "Eating Mangos",
      ProjectLogo: MangoSwap,
      CurrentFunding: CurrentFundingString,
      FundingGoal: FundingGoalString,
      GiveLink: give,
      LearnLink: learn,
    },
    {
      ProjectName: "Minority Think Tank",
      ProjectDescription: "Lit Tank",
      ProjectLogo: MTTLogo,
      CurrentFunding: CurrentFundingString,
      FundingGoal: FundingGoalString,
      GiveLink: give,
      LearnLink: learn,
    },
    {
      ProjectName: "Minority Venture Capital",
      ProjectDescription: "MVC",
      ProjectLogo: MVC,
      CurrentFunding: CurrentFundingString,
      FundingGoal: FundingGoalString,
      GiveLink: give,
      LearnLink: learn,
    },
  ];

  return <StyledStartUpSection></StyledStartUpSection>;
};

export default StartUpSection;
