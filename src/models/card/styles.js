import styled from "styled-components";

export const ImageTextContent = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  top: 0%;
  color: #ffffff;
  visibility: hidden;

  h3 {
    margin: 0;
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 2px;
    font-family: system-ui;
    font-weight: 400;
    font-size: x-large;
  }
`;

export const ImageWrapper = styled.div`
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  margin: auto;

  img {
    width: fill-available;
    height: 500px;
    display: block;

    @media only screen and (max-width: 600px) {
      height: 350px;
    }
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  padding-bottom: 16px;
  box-shadow: 0 2px 7px rgb(145 145 145 / 35%);
  font-family: system-ui;
  background: #ffffff;

  &:hover ${ImageTextContent} {
    visibility: visible;
    transition: 0.7s;
    backdrop-filter: brightness(0.2);
  }

  a {
    outline: none;
    text-decoration: none;
  }
`;

export const CardContent = styled.div``;

export const CardHeadline = styled.div`
  padding: 0px 20px;
  font-size: 12px;
  color: #000000;
  text-align: left;
  height: 80px;
`;

export const CardFooter = styled.div`
  padding: 0px 14px;
  text-align: right;
`;

export const CardLink = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
