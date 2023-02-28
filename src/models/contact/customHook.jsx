import { useCallback, useState } from "react";
import { sendEmail } from "../../utils/helpers";

export const useForm = (formRef) => {
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        setIsLoading(true);
        const response = await sendEmail(formRef);
        if (response.text === "OK" && response.status === 200) {
          setSuccess(response);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [formRef]
  );

  return { success, isLoading, error, handleSubmit };
};
