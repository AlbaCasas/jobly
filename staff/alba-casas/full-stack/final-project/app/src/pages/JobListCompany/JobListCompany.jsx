import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import {
  RowHeader,
  ImageCandidates,
  CreateJobButton,
  Row,
  CandidatesWrapper,
  Heading,
  Table,
  TextDesktop,
  TextMobile,
  StyledJobHeadingCard,
  TitleColumn,
  LocationColumn,
  RoleColumn,
  CandidateColumn,
} from "./styled";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { listJobsFromCompany } from "../../api";
import HeadingCard from "./HeadingCard/HeadingCard";

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
      <Heading>
        <Box padding="24px" gap="16px" justifyContent="space-between">
          <HeadingCard
            title={totalCandidates}
            subtitle="Candidates"
            Icon={MdPerson}
          />
          <StyledJobHeadingCard
            title={jobList.length}
            subtitle="Postings"
            Icon={MdWorkOutline}
          />
          <CreateJobButton>
            <TextMobile color="white">+</TextMobile>
            <TextDesktop color="white">Create Job</TextDesktop>
          </CreateJobButton>
        </Box>
      </Heading>
      <Table>
        <RowHeader>
          <TitleColumn>
            <Text variant="caption-bold">Title</Text>
          </TitleColumn>
          <LocationColumn>
            <Text variant="caption-bold">Location</Text>
          </LocationColumn>
          <RoleColumn>
            <Text variant="caption-bold">Role</Text>
          </RoleColumn>
          <CandidateColumn>
            <Text variant="caption-bold">Candidates</Text>
          </CandidateColumn>
        </RowHeader>
        {!!jobList.length &&
          jobList.map((job) => {
            return (
              <Row key={job._id}>
                <TitleColumn>
                  <Text variant="caption">{job.title}</Text>
                </TitleColumn>
                <LocationColumn>
                  <Text variant="caption">{job.location}</Text>
                </LocationColumn>
                <RoleColumn>
                  <Text variant="caption">{job.role}</Text>
                </RoleColumn>
                <CandidateColumn>
                  <CandidatesWrapper>
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
                  </CandidatesWrapper>
                </CandidateColumn>
              </Row>
            );
          })}
      </Table>
    </Layout>
  );
};

export default JobListCompany;
