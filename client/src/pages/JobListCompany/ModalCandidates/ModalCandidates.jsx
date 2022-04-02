import React from 'react';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import {
  Header,
  Avatar,
  CancelButton,
  Row,
  Content,
  StyledModal,
  NameColumn,
  EmailColumn,
  PhoneColumn,
  ResumeColumn,
} from './styled';
import { downloadBase64 } from './utils';

function ModalCandidates({ onClose, selectedJob }) {
  return (
    <StyledModal onClose={onClose}>
      <Header>
        <Box alignItems="center" flexDirection="column" gap="24px">
          <Box gap="12px" alignItems="center">
            <Text variant="subheading">{selectedJob.title} </Text>
            <Text variant="subheading">-</Text>
            <Text variant="subheading"> {selectedJob.company?.name} </Text>
          </Box>
          <Box>
            <Text variant="section">List of candidates</Text>
          </Box>
          <Content
            gap="280px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box flexDirection="column" gap="24px">
              {!!selectedJob.candidatures?.length &&
                selectedJob.candidatures?.map((candidature) => {
                  return (
                    <Row>
                      <Box alignItems="center" gap="16px">
                        <Avatar
                          key={candidature.candidate._id}
                          src={candidature.candidate.avatar}
                        />
                        <NameColumn>
                          <Text variant="caption-bold">
                            {candidature.candidate?.name}
                          </Text>
                        </NameColumn>
                        <EmailColumn>
                          <Text variant="caption-bold">
                            {candidature.candidate?.email}
                          </Text>
                        </EmailColumn>

                        <PhoneColumn>
                          <Text variant="caption-bold">
                            {candidature.candidate?.phone}
                          </Text>
                        </PhoneColumn>
                        <ResumeColumn>
                          {candidature.resume && (
                            <Text
                              variant="link"
                              onClick={() =>
                                downloadBase64({
                                  base64: candidature.resume,
                                  fileName: `${candidature.candidate.name} - Jobly Resume`,
                                })
                              }
                            >
                              Resume
                            </Text>
                          )}
                        </ResumeColumn>
                      </Box>
                    </Row>
                  );
                })}
            </Box>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </Content>
        </Box>
      </Header>
    </StyledModal>
  );
}

export default ModalCandidates;
