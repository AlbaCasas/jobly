import {
  ContainerTag,
  ImageContainer,
  ImageStyled,
  StyledCard,
} from "./styled";
import Text from "../Text";
import Tag from "../Tag";

const Card = ({ avatar, title, description, location, role }) => {
  return (
    <StyledCard>
      <ImageContainer>
        <ImageStyled
          src="https://s3.eu-west-1.amazonaws.com/cdn.spydeals.nl/images/uploads/DPX1OzRMnS0ghLvgSGOQNjxpaJl6X42OFc0UN8Xr.png"
          alt="glovo"
        />
      </ImageContainer>
      <Text variant="section">Full-Stack developer</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
        nisi vel justo consequat interdum. Donec massa neque, lobortis quis...
      </Text>
      <ContainerTag>
        <Tag>Barcelona</Tag>
        <Tag>Developer</Tag>
      </ContainerTag>
    </StyledCard>
  );
};

export default Card;
