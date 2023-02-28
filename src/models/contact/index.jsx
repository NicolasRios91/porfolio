import { useRef } from "react";
import { useForm } from "./customHook";
import { FormWrapper } from "./styles";
import { inputFields } from "../../utils/constants";
import { Container } from "../../components/common/styles";
import { Button } from "../../components/button";
import useWindowSize from "../../utils/hooks/window-size";

export const Form = () => {
  const form = useRef();
  const { handleSubmit, success, isLoading, error } = useForm(form);
  const { width } = useWindowSize();

  return (
    <Container backgroundColor>
      <h1>Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <FormWrapper>
          {inputFields.map((field) => (
            <div className="input_container">
              <label htmlFor={field.name} aria-label={field.name}>
                {field.name}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div className="textarea_container">
            <label htmlFor="message" aria-label="write your message">
              message
            </label>
            <textarea
              id="message"
              className="textarea"
              name="message"
              placeholder="Write your message"
              required
            />
          </div>
          <div className="button_container">
            {/* works as submit  */}
            <Button size={width > 600 ? "x-large" : "large"}>Submit</Button>
          </div>
        </FormWrapper>
      </form>
      {success && <p>Mail sent successfully</p>}
      {isLoading && <p>LOADING....</p>}
      {error && !success && <p>{error}</p>}
    </Container>
  );
};
