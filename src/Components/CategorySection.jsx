import React from "react";
import styled from "styled-components";

//IMAGES
import Gear from "../Assets/Images/gear.png";
import Gears from "../Assets/Images/gears.png";
import World from "../Assets/Images/world.png";

import CategoryCard from "./CategoryCard";

const StyledCategorySection = styled.div`
  padding: 0 2rem;

  .categoryTitle {
    font-size: 3.5rem;
    color: #151371;
    margin: 20px 0;
  }

  .categoryCards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const CategorySection = () => {
  const imageArray = [
    { title: "Engineering", imageSrc: Gears },
    { title: "Science", imageSrc: World },
    {
      title: "Innovation",
      imageSrc: Gears,
    },
    {
      title: "Programming",
      imageSrc: Gear,
    },
  ];

  const CategoryCardsRender = imageArray.map((categoryCard, index) => {
    return (
      <CategoryCard
        key={categoryCard.title}
        title={categoryCard.title}
        imageSrc={categoryCard.imageSrc}
      />
    );
  });

  return (
    <StyledCategorySection>
      <h1 className="categoryTitle">By Category</h1>
      <div className="categoryCards">{CategoryCardsRender}</div>
    </StyledCategorySection>
  );
};

export default CategorySection;
