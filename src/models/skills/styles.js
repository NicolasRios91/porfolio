import styled from "styled-components";

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 100px));
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1360px) {
    grid-template-columns: repeat(6, minmax(50px, 100px));
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(4, minmax(50px, 100px));
  }

  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(3, minmax(50px, 100px));
  }
`;
