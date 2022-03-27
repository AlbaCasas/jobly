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
import { DEFAULT_ERROR } from "../../../constants/feedbacks";

const ModalApply = ({ onClose, job, setJob }) => {
  const { setFeedback } = useContext(Context);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxSize: 5242880, // 5MB en bytes
  });

  const resume = acceptedFiles[0];
  const applyToJob = async () => {
    try {
      const base64Resume = await convertToBase64(resume);
      await applyJob(sessionStorage.token, job.id, base64Resume);
      const appliedJob = retrieveJob(sessionStorage.token, job.id);
      setJob(appliedJob);
      onClose();
      setFeedback({
        message: "Job successfully applied.",
        level: "success",
      });
    } catch (error) {
      setFeedback(DEFAULT_ERROR);
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
