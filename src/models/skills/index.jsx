import { Container } from "../../components/common/styles";
import icons from "../../utils/icons";
import { SkillsWrapper, IconsWrapper } from "./styles";

export const Skills = () => (
  <Container backgroundColor>
    <h1 style={{ color: "#695aa6" }}>Skills</h1>
    <IconsWrapper>
      {icons.map(({ icon, label }) => (
        <div key={label}>
          {icon}
          <h4 style={{ margin: 0 }}>{label}</h4>
        </div>
      ))}
    </IconsWrapper>
  </Container>
);
