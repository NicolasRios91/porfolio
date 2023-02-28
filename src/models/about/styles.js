import styled from "styled-components";

export const AboutWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 80px;
  text-align: left;
  font-family: system-ui;

  img {
    height: 300px;
    width: fit-content;
    display: block;
    border-radius: 50%;
    filter: drop-shadow(2px 4px 6px #000000);
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentSection = styled.div`
  width: 60%;

  h1 {
    margin-bottom: 0px;
    color: ${(props) => props.theme.color.darkPurple};
    font-weight: 700;
    font-size: 60px;
  }

  h3 {
    display: inline;
    letter-spacing: 1px;
    color: ${(props) => props.theme.color.purple};
    font-weight: 700;
  }

  span,
  p {
    font-size: 24px;
    font-weight: 300;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;

    h1 {
      font-size: 32px;
    }

    span,
    p {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
