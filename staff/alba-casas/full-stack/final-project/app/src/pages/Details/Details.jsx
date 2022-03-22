import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Box from "../../components/Box";
import Text from "../../components/Text";
import { useNavigate, Link } from "react-router-dom";
import { deleteJob, retrieveJob, retrieveUser } from "../../api";
import {
  ArrowBack,
  ContainerDescription,
  GoBackText,
  Header,
  ImageStyled,
  StyledButton,
  StyledLocation,
  StyledTextBodyDescription,
  StyledTextContainer,
  StyledTextDescription,
  Wrapper,
  ContainerLeft,
} from "./styled";
import moment from "moment";
import ModalApply from "./ModalApply";
import Toast from "../../components/Toast";
import { MdOutlineError } from "react-icons/md";

const Details = ({ toast, setToast, closeToast }) => {
  const [job, setJob] = useState(null);
  const [user, setUser] = useState({});
  const [isModalShow, setIsModalShow] = useState();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

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
          setToast("delete");
          goBack();
        })
        .catch(setToast("error"));
    } catch (error) {
      alert(error.message);
    }
  };

  const hasUserApplied = job?.candidatures.some((candidature) => {
    return candidature.candidate?._id === user.id;
  });

  return (
    <>
      {toast === "error" && (
        <Toast
          variant="error"
          icon={<MdOutlineError />}
          closeToast={closeToast}
        >
          Uh oh, there was a problem with your request.
        </Toast>
      )}
      {!!isModalShow && <ModalApply onClose={toggleApplyModal} jobId={jobId} />}
      {job && (
        <Layout>
          <Wrapper>
            <Header>
              <GoBackText
                forwardedAs={Link}
                to={-1}
                color="white"
                variant="link"
              >
                <ArrowBack />
                Go back
              </GoBackText>
              <ImageStyled src={job.company.avatar} alt="logo" />
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
                    {job.company.name}
                  </StyledLocation>
                  <Text>{job.location}</Text>
                </ContainerLeft>
                <Text>
                  Posted {moment(Date.now()).diff(moment(job.createAt), "days")}{" "}
                  days ago
                </Text>
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
                <StyledButton
                  disabled={hasUserApplied}
                  onClick={toggleApplyModal}
                >
                  Apply now
                </StyledButton>
              ) : (
                <StyledButton onClick={handleClickDeleteJob}>
                  Delete Job
                </StyledButton>
              )}
            </Box>
          </Wrapper>
        </Layout>
      )}
    </>
  );
};

export default Details;
