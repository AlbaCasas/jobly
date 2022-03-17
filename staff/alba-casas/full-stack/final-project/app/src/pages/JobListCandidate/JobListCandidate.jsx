import React, { useEffect, useState } from "react";
import Box from "../../components/Box";
import Layout from "../../components/Layout/Layout";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";
import {
  CandidateColumn,
  CandidatesWrapper,
  ContainerIcon,
  ContainerJobs,
  ContainerText,
  Heading,
  ImageCompany,
  LocationColumn,
  RoleColumn,
  Row,
  RowHeader,
  Subtitle,
  Table,
  Title,
  TitleColumn,
} from "./styled";
import { MdWorkOutline } from "react-icons/md";
import { listJobsFromCandidate } from "../../api";
import moment from "moment";

const JobListCandidate = () => {
  const [jobList, setJobList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      listJobsFromCandidate(sessionStorage.token).then((jobs) => {
        setJobList(jobs);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <Layout>
      <Heading>
        <Box justifyContent="space-between">
          <ContainerJobs>
            <ContainerIcon>
              <MdWorkOutline color="#2E66CC" />
            </ContainerIcon>
            <ContainerText>
              <Title>{jobList.length}</Title>
              <Subtitle>Jobs</Subtitle>
            </ContainerText>
          </ContainerJobs>
        </Box>
      </Heading>
      <Table>
        <RowHeader>
          <TitleColumn>
            <Text variant="caption-bold">Job Title</Text>
          </TitleColumn>
          <LocationColumn>
            <Text variant="caption-bold">Location</Text>
          </LocationColumn>
          <RoleColumn>
            <Text variant="caption-bold">Role</Text>
          </RoleColumn>
          <CandidateColumn>
            <Text variant="caption-bold">Date</Text>
          </CandidateColumn>
        </RowHeader>
        {!!jobList.length &&
          jobList.map((job) => {
            return (
              <Row
                onClick={() => {
                  navigate(`/job/${job.id}`);
                }}
                key={job._id}
              >
                <TitleColumn>
                  <ImageCompany src={job.company.avatar} />
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
                    {!!job.candidatures.length &&
                      job.candidatures.map((candidature) => {
                        return (
                          <Text>
                            {moment(candidature.createAt).format("DD-MM-YYYY")}
                          </Text>
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

export default JobListCandidate;
