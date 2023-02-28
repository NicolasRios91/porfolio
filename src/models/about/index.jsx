import { AboutWrapper, ContentSection } from "./styles";
import profile from "../../utils/images/profile.jpg";
import { Container } from "../../components/common/styles";
import {
  ABOUT_CONTENT,
  ABOUT_LABEL,
  EXPERIENCE_CONTENT,
  EXPERIENCE_ICE,
  EXPERIENCE_LABEL,
  EXPERIENCE_MINDBODYGREEN,
  ICE,
  MINDBODYGREEN,
} from "../../utils/constants";

const About = () => (
  <Container>
    <AboutWrapper>
      <div>
        <img src={profile} alt="" />
      </div>
      <ContentSection>
        <h1>{ABOUT_LABEL}</h1>
        <p>{ABOUT_CONTENT}</p>
        <h1>{EXPERIENCE_LABEL}</h1>
        <p>{EXPERIENCE_CONTENT}</p>
        <span>
          <h3>{MINDBODYGREEN}</h3>: {EXPERIENCE_MINDBODYGREEN}
        </span>
        <br />
        <br />
        <span>
          <h3>{ICE}</h3>: {EXPERIENCE_ICE}
        </span>
      </ContentSection>
    </AboutWrapper>
  </Container>
);

export default About;
