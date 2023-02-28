import emailjs from "@emailjs/browser";

export const sendEmail = async (formRef) => {
  return await emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_YOUR_TEMPLATE_ID,
    formRef.current,
    process.env.REACT_APP_YOUR_PUBLIC_KEY
  );
};
