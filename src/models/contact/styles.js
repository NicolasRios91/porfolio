import styled from "styled-components";

export const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;
  gap: 20px;
  grid-template-areas:
    "a a"
    "b b"
    "c c";
  @media only screen and (max-width: 600px) {
    grid-template-rows: 60px 60px 1fr 60px;
    grid-template-areas:
      "a a"
      "a2 a2"
      "b b"
      "c c";
  }
  label {
    display: none;
  }

  .input_container,
  .textarea_container {
    padding-left: 6px;
    padding-right: 6px;
    border: none;
    outline: none;
  }

  .input_container {
    width: 100%;
    grid-area: a a;

    input[type="text"] {
      box-sizing: border-box;
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      font-size: 16px;

      :focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgb(105 90 166 / 25%);
      }
    }
    @media only screen and (max-width: 600px) {
      :nth-child(odd) {
        grid-area: a;
      }
      :nth-child(even) {
        grid-area: a2;
      }
    }
  }

  .textarea_container {
    width: 100%;
    grid-area: b;

    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 8px 12px;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      font-size: 16px;
      height: 160px;
      margin-bottom: 20px;
      resize: vertical;

      :focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgb(105 90 166 / 25%);
      }
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .button_container {
    text-align: center;
    grid-area: c;
  }
`;
