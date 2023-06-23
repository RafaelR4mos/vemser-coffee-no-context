import styled from "styled-components";

export const BigHeroSection = styled.main`
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 90vh;

  & > div {
    flex: 1;
  }
`;

export const CoffeeSection = styled.section`
  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const CoffeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
