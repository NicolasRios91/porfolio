import styled from "styled-components";
import hero from "../../utils/images/hero.jpg";

export const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media only screen and (max-width: 600px) {
    height: 80vh;
  }
`;

export const HeroContent = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ffffff;

  h1 {
    font-size: 46px;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 42px;
    font-weight: 300;
    letter-spacing: 8px;
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const HeroText = styled.div`
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  padding: 30px;
  border: 4px solid #ffffff;

  @media only screen and (max-width: 600px) {
    margin: 10%;
  }
`;
