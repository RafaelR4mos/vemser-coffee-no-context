import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  width: 100%;
  max-width: 256px;

  text-align: center;

  background-color: ${(props) => props.theme.tertiary};

  img {
    max-width: 120px;
  }
`;
