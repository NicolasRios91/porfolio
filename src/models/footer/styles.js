import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #00010c;

  a {
    width: 50px;
    text-align: center;
    border-radius: 30px;
    border: 3px solid #c6c9d8bf;
    color: #c6c9d8bf;
    transition: 0.4s;

    svg {
      width: 20px;
      color: #c6c9d8bf;
    }

    :hover {
      background: ${(props) => props.theme.color.purple};
      border: 3px solid ${(props) => props.theme.color.purple};
      transition: 0.4s;

      svg {
        color: #ffffff;
      }
    }
  }
`;
