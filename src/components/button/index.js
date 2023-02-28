import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background-color: #28284f;
  padding: 12px 20px;
  border-radius: ${(props) => (props.rounded ? "30px" : "")};
  font-size: ${(props) => props.size || "medium"};
  border: none;
  color: ${(props) => props.color || "#ffffff"};
  cursor: pointer;
  z-index: 2;

  :hover {
    background-color: #695aa6;
  }
`;
