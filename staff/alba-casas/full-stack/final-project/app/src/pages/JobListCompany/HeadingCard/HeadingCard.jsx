import React from "react";
import {
  ContainerCandidates,
  ContainerIcon,
  ContainerText,
  Subtitle,
  Title,
} from "./styled";

function HeadingCard({ title, subtitle, Icon, className }) {
  return (
    <ContainerCandidates className={className}>
      <ContainerIcon>
        <Icon color="#2E66CC" />
      </ContainerIcon>
      <ContainerText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContainerText>
    </ContainerCandidates>
  );
}

export default HeadingCard;
