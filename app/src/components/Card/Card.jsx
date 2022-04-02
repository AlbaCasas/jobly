import {
  ContainerTag,
  ImageContainer,
  ImageStyled,
  StyledCard,
  StyledDescription,
} from "./styled";
import Text from "../Text";
import Tag from "../Tag";

const Card = ({
  avatar,
  title,
  description,
  location,
  role,
  candidatures,
  isCompany,
  shouldOnlyShowOwnJobs,

  ...props
}) => {
  return (
    <StyledCard isCompany={isCompany} {...props}>
      <ImageContainer>
        <ImageStyled src={avatar} alt="company" />
        {isCompany && <Tag>{candidatures.length}</Tag>}
      </ImageContainer>
      <Text isCompany={isCompany} variant="section">
        {title}
      </Text>
      <StyledDescription isCompany={isCompany}>{description}</StyledDescription>
      <ContainerTag>
        <Tag isCompany={isCompany}>{location}</Tag>
        <Tag isCompany={isCompany}>{role}</Tag>
      </ContainerTag>
    </StyledCard>
  );
};

export default Card;
