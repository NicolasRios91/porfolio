import {
  ImageWrapper,
  ImageTextContent,
  CardHeadline,
  CardFooter,
  CardContent,
  CardLink,
  CardWrapper,
} from "./styles";
import { Button } from "../../components/button";

const Card = ({ card }) => {
  const {
    image,
    url: { app, github },
    description,
    title,
  } = card;

  return (
    <CardWrapper>
      <CardLink href={app} target="_blank" rel="noreferrer" aria-label={app} />
      <ImageWrapper>
        <img src={image} alt="" />
        <ImageTextContent className="asd" id="dsa">
          <p>{description}</p>
          <h3>Click to visit site!</h3>
        </ImageTextContent>
      </ImageWrapper>
      <CardContent>
        <CardHeadline>
          <h2>{title}</h2>
        </CardHeadline>
        <CardFooter>
          <a href={github} target="_blank" rel="noreferrer" aria-label={github}>
            <Button>View Code</Button>
          </a>
        </CardFooter>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
