import {
  DateColumn,
  ImageCompany,
  LocationColumn,
  RoleColumn,
  TitleColumn,
} from "./styled";
import moment from "moment";
import Text from "../../../components/Text";
import Table from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../../../Context";

const CandidaturesTable = ({ jobList }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Table.Table>
      <Table.Header>
        <Table.HeaderRow>
          <TitleColumn>
            <Text variant="caption-bold">Job Title</Text>
          </TitleColumn>
          <LocationColumn>
            <Text variant="caption-bold">Location</Text>
          </LocationColumn>
          <RoleColumn>
            <Text variant="caption-bold">Role</Text>
          </RoleColumn>
          <DateColumn>
            <Text variant="caption-bold">Date</Text>
          </DateColumn>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {!!jobList.length &&
          user &&
          jobList.map((job) => {
            const userCandidature = job.candidatures.find((candidature) => {
              return candidature.candidate?._id === user.id;
            });

            return (
              <Table.Row
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
                <DateColumn>
                  <Text variant="caption">
                    {moment(userCandidature.createAt).format("MMMM DD, YYYY")}
                  </Text>
                </DateColumn>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table.Table>
  );
};

export default CandidaturesTable;
