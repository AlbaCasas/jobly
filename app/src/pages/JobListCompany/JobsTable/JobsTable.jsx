import {
  Avatar,
  CandidatesWrapper,
  TitleColumn,
  LocationColumn,
  RoleColumn,
  CandidateColumn,
} from "./styled";
import Text from "../../../components/Text";
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";

const JobsTable = ({ jobList, onSelectJob }) => {
  const navigate = useNavigate();

  return (
    <Table.Table>
      <Table.Header>
        <Table.HeaderRow>
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
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {!!jobList.length &&
          jobList.map((job) => {
            return (
              <Table.Row key={job.id}>
                <TitleColumn
                  onClick={() => {
                    navigate(`/job/${job.id}`);
                  }}
                >
                  <Text variant="caption">{job.title}</Text>
                </TitleColumn>
                <LocationColumn
                  onClick={() => {
                    navigate(`/job/${job.id}`);
                  }}
                >
                  <Text variant="caption">{job.location}</Text>
                </LocationColumn>
                <RoleColumn
                  onClick={() => {
                    navigate(`/job/${job.id}`);
                  }}
                >
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
                            <Avatar
                              onClick={() => onSelectJob(job.id)}
                              key={candidature.candidate._id}
                              src={candidature.candidate.avatar}
                            />
                          </>
                        );
                      })}
                  </CandidatesWrapper>
                </CandidateColumn>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table.Table>
  );
};

export default JobsTable;
