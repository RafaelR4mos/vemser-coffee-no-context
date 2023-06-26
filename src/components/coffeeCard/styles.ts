import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;

  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px 6px 36px;
  width: 100%;
  max-width: 290px;
  color: ${(props) => props.theme.text};

  text-align: center;

  background-color: ${(props) => props.theme.tertiary};

  img {
    max-width: 120px;
  }

  & p {
    font-size: 1rem;
  }
`;

export const CoffeeValueContainer = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.text};

  & > strong {
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

export const CardInfoContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const IncrementDecrementContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.baseBtn};
  border-radius: 4px;
  gap: 0.2rem;
`;
