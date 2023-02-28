import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 500px));
  justify-content: center;
  align-items: flex-end;
  gap: 40px;

  @media only screen and (max-width: 600px) {
    padding: 0px 30px;
  }
`;
