import Card from "../card";
import data from "../../utils/projectsData";
import { CardsWrapper } from "./styles";
import { Container } from "../../components/common/styles";

const CardList = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <CardsWrapper>
        {data.map((card, index) => (
          <Card key={card.image} card={card} index={index} />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default CardList;
