import React, { useContext } from "react";
import Modal from "../../../components/Modal";
import Text from "../../../components/Text";
import {
  ContainerModal,
  ContainerText,
  ButtonFile,
  ButtonSend,
} from "./styled";
import { useDropzone } from "react-dropzone";
import { convertToBase64 } from "../../Profile/utils";
import { applyJob, retrieveJob } from "../../../api";
import Context from "../../../Context";

const ModalApply = ({ onClose, job, setJob }) => {
  const { setFeedback } = useContext(Context);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxSize: 5242880, // 5MB en bytes
  });

  const resume = acceptedFiles[0];
  const applyToJob = () => {
    try {
      convertToBase64(resume).then((base64Resume) => {
        applyJob(sessionStorage.token, job.id, base64Resume)
          .then(() => {
            retrieveJob(sessionStorage.token, job.id)
              .then((job) => {
                setJob(job);
                onClose();
                setFeedback({
                  message: "Job successfully applied.",
                  level: "success",
                });
              })
              .catch((error) => alert(error.message));
          })
          .catch(() => {
            setFeedback({
              message: "Uh oh, there was a problem with your request.",
              level: "error",
            });
          });
      });
    } catch (error) {
      setFeedback({
        message: "Uh oh, there was a problem with your request.",
        level: "error",
      });
    }
  };

  return (
    <Modal onClose={onClose}>
      <ContainerModal>
        <ContainerText>
          <Text variant="subheading">
            {job?.title} - {job?.company?.name}
          </Text>
          <Text>
            Please attach your resume in a PDF format to apply for the FullStack
            Developer position. Maximum file size 5MB.
          </Text>
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <ButtonFile>Choose File</ButtonFile>
          </div>
          {resume && <p>{resume.path}</p>}
        </ContainerText>
        <ButtonSend onClick={applyToJob}>Send resume</ButtonSend>
      </ContainerModal>
    </Modal>
  );
};

export default ModalApply;
