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
import { listjobs } from "../../api";

const JobListCompany = () => {
  const [jobList, setJobList] = useState({});

  useEffect(() => {
    try {
      listjobs(sessionStorage.token).then((job) => {
        setJobList(job);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

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
                <TextJob>{jobList.length}</TextJob>
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
              <Text variant="captionBold">Title</Text>
              <Text variant="captionBold">Candidates</Text>
            </Header>
            {!!jobList.length
              ? jobList.map((job) => {
                  return (
                    <Row key={job._id}>
                      {job.title}
                      <RowCandidate>
                        <Text>{job.candidates.length}</Text>
                        {!!job.candidates.length
                          ? job.candidates.map((candidate) => {
                              return (
                                <>
                                  <ImageCandidates
                                    key={candidate._id}
                                    src={candidate.avatar}
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
