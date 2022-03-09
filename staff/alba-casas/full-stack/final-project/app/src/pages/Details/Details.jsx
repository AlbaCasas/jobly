import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import { retrieveJob, retrieveUser } from "../../api";
import {
  ArrowBack,
  ContainerDescription,
  GoBackText,
  Header,
  ImageStyled,
  Section,
  StyledButton,
  StyledContainer,
  StyledLocation,
  StyledTextBodyDescription,
  StyledTextContainer,
  StyledTextDescription,
  View,
  Wrapper,
} from "./styled";

const Details = () => {
  const [avatar, setAvatar] = useState();
  const [nameCompany, setNameCompany] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [role, setRole] = useState();
  const { jobId } = useParams();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setRole(user.role);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      retrieveJob(sessionStorage.token, jobId)
        .then((job) => {
          setTitle(job.title);
          setNameCompany(job.company.name);
          setLocation(job.location);
          setDescription(job.description);
          setDate(job.createAt);
          setAvatar(job.company.avatar);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, [jobId]);
  return (
    <Layout>
      <View>
        <Section>
          <Wrapper>
            <Header>
              <GoBackText
                forwardedAs={Link}
                to="/board"
                color="white"
                variant="link"
              >
                <ArrowBack />
                Go back to login
              </GoBackText>
              <StyledContainer>
                <ImageStyled src={avatar} alt="logo" />
              </StyledContainer>
            </Header>
            <Box
              marginTop="32px"
              padding="24px"
              flexDirection="column"
              gap="16px"
            >
              <Text variant="subheading">{title}</Text>
              <StyledTextContainer>
                <StyledLocation variant="bodyBold">
                  {nameCompany}
                </StyledLocation>
                <Text>{location}</Text>
              </StyledTextContainer>
              <Text>{date}</Text>
              <ContainerDescription>
                <StyledTextDescription variant="section">
                  Description
                </StyledTextDescription>
                <StyledTextBodyDescription>
                  {description}
                </StyledTextBodyDescription>
              </ContainerDescription>
              {role === "candidate" ? (
                <StyledButton>Apply now</StyledButton>
              ) : null}
            </Box>
          </Wrapper>
        </Section>
      </View>
    </Layout>
  );
};

export default Details;
