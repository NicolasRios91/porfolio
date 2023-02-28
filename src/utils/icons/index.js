import sty from "./sty.png";
import responsiveImage from "./responsive.png";

import {
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiCss3,
  SiGit,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiJest,
} from "react-icons/si";
import { ImAccessibility } from "react-icons/im";

export const html = {
  icon: <SiHtml5 className="icon" style={{ color: "#ff6d00" }} />,
  label: "HTML",
};

export const js = {
  icon: (
    <SiJavascript
      className="icon"
      style={{ color: "#ffd600", width: "52px", height: "52px" }}
    />
  ),
  label: "Javascript",
};

export const ts = {
  icon: <SiTypescript className="icon" style={{ color: "#2f74c0" }} />,
  label: "Typescript",
};

export const css = {
  icon: <SiCss3 className="icon" style={{ color: "#0068ba" }} />,
  label: "Css",
};

export const git = {
  icon: <SiGit className="icon" style={{ color: "#e94e31" }} />,
  label: "Git",
};

export const react = {
  icon: <SiReact className="icon" style={{ color: "#5ed3f3" }} />,
  label: "React",
};

export const redux = {
  icon: <SiRedux className="icon" style={{ color: "#7248b6" }} />,
  label: "Redux",
};
export const reduxSaga = {
  icon: <SiReduxsaga className="icon" style={{ color: "#7248b6" }} />,
  label: "Redux-Saga",
};
export const styled = {
  icon: <img src={sty} alt="" className="icon" />,
  label: "Styled Components",
};

export const responsive = {
  icon: <img src={responsiveImage} alt="" className="icon" />,
  label: "Responsive Design",
};

export const jest = {
  icon: <SiJest className="icon" style={{ color: "#c03b13" }} />,
  label: "Unit Testing",
};
export const Accessibility = {
  icon: <ImAccessibility className="icon" style={{ color: "#129ed9" }} />,
  label: "Website Accessibility",
};

const icons = [
  html,
  css,
  js,
  ts,
  react,
  redux,
  reduxSaga,
  styled,
  jest,
  git,
  responsive,
  Accessibility,
];

export default icons;
