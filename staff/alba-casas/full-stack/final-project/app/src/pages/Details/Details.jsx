import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { useNavigate } from "react-router-dom";
import { applyJob, deleteJob, retrieveJob, retrieveUser } from "../../api";
import {
  ArrowBack,
  ContainerDescription,
  GoBackText,
  Header,
  ImageStyled,
  StyledButton,
  ImageContainer,
  StyledLocation,
  StyledTextBodyDescription,
  StyledTextContainer,
  StyledTextDescription,
  Wrapper,
  ContainerLeft,
  ContainerModal,
  ContainerText,
  ButtonFile,
  ButtonSend,
} from "./styled";
import moment from "moment";
import { useDropzone } from "react-dropzone";
import { convertToBase64 } from "../Profile/utils";
import Modal from "../../components/Modal";

const Details = () => {
  const [job, setJob] = useState({});
  const [user, setUser] = useState({});
  const [isModalShow, setIsModalShow] = useState();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    noKeyboard: true,
    maxSize: 5242880, // 5MB en bytes
  });

  const resume = acceptedFiles[0];

  const back = () => navigate(-1);

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setUser(user);
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

  const toggleApplyModal = () => {
    setIsModalShow(!isModalShow);
  };

  const handleClickDeleteJob = () => {
    try {
      deleteJob(sessionStorage.token, jobId)
        .then(() => {
          alert("deleted job");
          back();
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const applyToJob = () => {
    try {
      convertToBase64(resume).then((base64Resume) => {
        applyJob(sessionStorage.token, jobId, base64Resume)
          .then(() => {
            toggleApplyModal();
          })
          .catch((error) => {
            alert(error.message);
          });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!!isModalShow && (
        <Modal onClose={toggleApplyModal}>
          <ContainerModal>
            <ContainerText>
              <Text variant="subheading">FullStack Developer - Glovo SL</Text>
              <Text>
                Please attach your resume in a PDF format to apply for the
                FullStack Developer position. Maximum file size 5MB.
              </Text>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <ButtonFile>Choose File</ButtonFile>
              </div>
              {resume && (
                <aside>
                  <p>{resume.path}</p>
                </aside>
              )}
            </ContainerText>
            <ButtonSend onClick={applyToJob}>Send resume</ButtonSend>
          </ContainerModal>
        </Modal>
      )}
      <Layout>
        <Wrapper>
          <Header>
            <GoBackText
              onClick={() => {
                back();
              }}
              color="white"
              variant="link"
            >
              <ArrowBack />
              Go back
            </GoBackText>
            <ImageContainer>
              <ImageStyled src={job.company?.avatar} alt="logo" />
            </ImageContainer>
          </Header>
          <Box
            marginTop="32px"
            padding="24px"
            flexDirection="column"
            gap="16px"
          >
            <Text variant="subheading">{job.title}</Text>
            <StyledTextContainer>
              <ContainerLeft>
                <StyledLocation variant="bodyBold">
                  {job.company?.name}
                </StyledLocation>
                <Text>{job.location}</Text>
              </ContainerLeft>
              <Text>Posted {moment(job.createAt).format("DD-MM-YYYY")}</Text>
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
            {user.role === "candidate" ? (
              <StyledButton onClick={toggleApplyModal}>Apply now</StyledButton>
            ) : (
              <StyledButton onClick={handleClickDeleteJob}>
                Delete Job
              </StyledButton>
            )}
          </Box>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Details;
