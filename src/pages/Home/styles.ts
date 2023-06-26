import styled from "styled-components";

export const BigHeroSection = styled.main`
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 90vh;

  & > div {
    flex: 1;
  }

  & button {
    margin-top: 2rem;
  }
`;

export const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primary};
  transition: all 0.3s;
  padding: 0.75rem 2rem;

  cursor: pointer;

  text-align: center;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 1.2rem;

  &:hover {
    background-color: ${(props) => props.theme.accent};
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
