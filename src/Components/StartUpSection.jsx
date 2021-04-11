import React from "react";
import styled from "styled-components";

// IMAGES
import MangoSwap from "../Assets/Images/mangoswap.png";
import OroVault from "../Assets/Images/orovault.png";
import MTTLogo from "../Assets/Images/MTTlogo.png";
import MVC from "../Assets/Images/MVC.png";
import StartUpCard from "./StartUpCard";

const StyledStartUpSection = styled.div`
  background: white;
  padding: 2rem;
  overflow: hidden;

  .startUpCards,
  .upcomingCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    place-items: center;
  }

  .featuredStartUps,
  .upcomingStartUps {
    font-size: 3rem;
    font-weight: bolder;
    color: #151371;
  }

  .featuredStartUps {
    margin-bottom: 1rem;
  }

  .upcomingStartUps {
    margin: 1rem 0;
  }
`;

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

  const startUpCardsRender = startUpCards.map((card, index) => {
    return (
      <StartUpCard
        ProjectName={card.ProjectName}
        ProjectDescription={card.ProjectDescription}
        ProjectLogo={card.ProjectLogo}
        CurrentFunding={card.CurrentFunding}
        FundingGoal={card.FundingGoal}
        GiveLink={card.GiveLink}
        LearnLink={card.LearnLink}
      />
    );
  });

  const upComingCards = [];

  for (let i = 0; i < 5; i++) {
    upComingCards.push(
      <StartUpCard
        ProjectName={startUpCards[0].ProjectName}
        ProjectDescription={startUpCards[0].ProjectName}
        ProjectLogo={startUpCards[0].ProjectLogo}
        CurrentFunding={startUpCards[0].CurrentFunding}
        FundingGoal={startUpCards[0].FundingGoal}
        GiveLink={startUpCards[0].GiveLink}
        LearnLink={startUpCards[0].LearnLink}
      />
    );
  }

  return (
    <StyledStartUpSection>
      <h1 className="featuredStartUps">Featured Startups</h1>
      <div className="startUpCards">
        {startUpCardsRender}
        {upComingCards[0]}
      </div>
      <h1 className="upcomingStartUps">Upcoming Startups</h1>
      <div className="upcomingCards">{upComingCards}</div>
    </StyledStartUpSection>
  );
};

export default StartUpSection;
