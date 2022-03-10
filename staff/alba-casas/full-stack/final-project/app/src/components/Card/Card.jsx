import {
  ContainerTag,
  ImageContainer,
  ImageStyled,
  StyledCard,
  StyledDescription,
} from "./styled";
import Text from "../Text";
import Tag from "../Tag";

const Card = ({ avatar, title, description, location, role, ...props }) => {
  return (
    <StyledCard {...props}>
      <ImageContainer>
        <ImageStyled src={avatar} alt="company" />
      </ImageContainer>
      <Text variant="section">{title}</Text>
      <StyledDescription>{description}</StyledDescription>
      <ContainerTag>
        <Tag>{location}</Tag>
        <Tag>{role}</Tag>
      </ContainerTag>
    </StyledCard>
  );
};

export default Card;
