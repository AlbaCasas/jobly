import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  ContainerCandidates,
  ContainerIcon,
  ContainerJobs,
  Header,
  ImageCandidates,
  JobButton,
  Row,
  RowCandidate,
  Section,
  Table,
  TextJob,
  View,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { listJobs } from "../../api";

const JobListCompany = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    try {
      listJobs(sessionStorage.token, {}).then((job) => {
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
            <Box gap="16px" justifyContent="space-between">
              <ContainerCandidates>
                <ContainerIcon>
                  <MdPerson color="#2E66CC" />
                </ContainerIcon>
                <TextJob>{totalCandidates}</TextJob>
              </ContainerCandidates>
              <ContainerJobs>
                <ContainerIcon>
                  <MdWorkOutline color="#2E66CC" />
                </ContainerIcon>
                <TextJob>{jobList.length}</TextJob>
              </ContainerJobs>
              <JobButton>+</JobButton>
            </Box>
          </Section>
          <Table>
            <Header>
              <Text variant="caption-bold">Title</Text>
              <Text variant="caption-bold">Candidates</Text>
            </Header>
            {!!jobList.length
              ? jobList.map((job) => {
                  return (
                    <Row key={job._id}>
                      {job.title}
                      <RowCandidate>
                        <Text variant="caption-bold">
                          {job.candidatures.length}
                        </Text>
                        {!!job.candidatures.length
                          ? job.candidatures.map((candidature) => {
                              return (
                                <>
                                  <ImageCandidates
                                    key={candidature.candidate._id}
                                    src={candidature.candidate.avatar}
                                  ></ImageCandidates>
                                </>
                              );
                            })
                          : null}
                      </RowCandidate>
                    </Row>
                  );
                })
              : null}
          </Table>
        </Box>
      </View>
    </Layout>
  );
};

export default JobListCompany;
