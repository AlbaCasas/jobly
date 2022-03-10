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
  const [job, setJob] = useState({});
  const [userRole, setUserRole] = useState();
  const { jobId } = useParams();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setUserRole(user.role);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    try {
      retrieveJob(sessionStorage.token, jobId)
        .then((job) => {
          setJob(job);
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
                <ImageStyled src={job.company?.avatar} alt="logo" />
              </StyledContainer>
            </Header>
            <Box
              marginTop="32px"
              padding="24px"
              flexDirection="column"
              gap="16px"
            >
              <Text variant="subheading">{job.title}</Text>
              <StyledTextContainer>
                <StyledLocation variant="bodyBold">
                  {job.company?.name}
                </StyledLocation>
                <Text>{job.location}</Text>
              </StyledTextContainer>
              <Text>{job.date}</Text>
              <ContainerDescription>
                <StyledTextDescription variant="section">
                  Description
                </StyledTextDescription>
                <StyledTextBodyDescription>
                  {job.description}
                </StyledTextBodyDescription>
              </ContainerDescription>
              {userRole === "candidate" ? (
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
