import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  ContainerCandidates,
  ContainerIcon,
  ContainerJobs,
  ContainerText,
  Header,
  ImageCandidates,
  JobButton,
  Row,
  RowCandidate,
  Section,
  Table,
  TextCandidates,
  TextDesktop,
  TextJob,
  TextMobile,
  View,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { listJobsFromCompany } from "../../api";

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    try {
      listJobsFromCompany(sessionStorage.token).then((job) => {
        setJobList(job);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const totalCandidates =
    jobList.length > 0
      ? jobList.map((job) => job.candidatures.length).reduce((a, b) => a + b)
      : 0;

  return (
    <Layout>
      <View>
        <Box
          width="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Section width="100%" justifyContent="center" alignItems="center">
            <Box padding="24px" gap="16px" justifyContent="space-between">
              <ContainerCandidates>
                <ContainerIcon>
                  <MdPerson color="#2E66CC" />
                </ContainerIcon>
                <ContainerText>
                  <TextJob>{totalCandidates}</TextJob>
                  <TextCandidates>Candidates</TextCandidates>
                </ContainerText>
              </ContainerCandidates>
              <ContainerJobs>
                <ContainerIcon>
                  <MdWorkOutline color="#2E66CC" />
                </ContainerIcon>
                <ContainerText>
                  <TextJob>{jobList.length}</TextJob>
                  <TextCandidates>Postings</TextCandidates>
                </ContainerText>
              </ContainerJobs>
              <JobButton>
                <TextMobile color="white">+</TextMobile>
                <TextDesktop color="white">Create Job</TextDesktop>
              </JobButton>
            </Box>
          </Section>
          <Table>
            <Header>
              <Text variant="caption-bold">Title</Text>
              <TextDesktop variant="caption-bold">Location</TextDesktop>
              <TextDesktop variant="caption-bold">Role</TextDesktop>
              <Text variant="caption-bold">Candidates</Text>
            </Header>
            {!!jobList.length &&
              jobList.map((job) => {
                return (
                  <Row key={job._id}>
                    <Text variant="caption">{job.title}</Text>
                    <TextDesktop variant="caption">{job.location}</TextDesktop>
                    <TextDesktop variant="caption">{job.role}</TextDesktop>
                    <RowCandidate>
                      <Text variant="caption-bold">
                        {job.candidatures.length}
                      </Text>
                      {!!job.candidatures.length &&
                        job.candidatures.map((candidature) => {
                          return (
                            <>
                              <ImageCandidates
                                key={candidature.candidate._id}
                                src={candidature.candidate.avatar}
                              />
                            </>
                          );
                        })}
                    </RowCandidate>
                  </Row>
                );
              })}
          </Table>
        </Box>
      </View>
    </Layout>
  );
};

export default JobListCompany;
