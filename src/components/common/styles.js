import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0px;
  background-color: ${(props) =>
    props.backgroundColor ? "#f8f9fc" : "#ffffff"};

  h1 {
    margin-top: 0px;
    margin-bottom: 60px;
  }
`;
