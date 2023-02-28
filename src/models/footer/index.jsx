import { FooterWrapper } from "./styles";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FaLessThan
        className="icon"
        id="less-than"
        style={{ width: "20px", color: "#c6c9d8bf" }}
      />
      <a
        href="https://github.com/NicolasRios91"
        target="_blank"
        rel="noreferrer"
        aria-label="github page"
      >
        <GrGithub className="icon" id="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicorios91"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin profile"
      >
        <GrLinkedinOption className="icon" id="linkedin" />
      </a>

      <a
        href="mailto:nicolasrios91@gmail.com"
        target="_blank"
        rel="noreferrer"
        aria-label="send email"
      >
        <FiMail className="icon" id="mail" />
      </a>
      <FaGreaterThan
        className="icon"
        id="greater-than"
        style={{ width: "20px", color: "#c6c9d8bf" }}
      />
    </FooterWrapper>
  );
};

export default Footer;
