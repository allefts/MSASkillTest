import React from "react";
import styled from "styled-components";

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
    align-items: center;
    justify-content: space-between;
  }
`;

const CategorySection = () => {
  return (
    <StyledCategorySection>
      <h1 className="categoryTitle">By Category</h1>
      <div className="categoryCards">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </StyledCategorySection>
  );
};

export default CategorySection;
