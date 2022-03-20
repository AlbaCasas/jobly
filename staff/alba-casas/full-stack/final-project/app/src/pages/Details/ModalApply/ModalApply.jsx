import React from "react";
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
import { applyJob } from "../../../api";

const ModalApply = ({ onClose, jobId }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxSize: 5242880, // 5MB en bytes
  });

  const resume = acceptedFiles[0];

  const applyToJob = () => {
    try {
      convertToBase64(resume).then((base64Resume) => {
        applyJob(sessionStorage.token, jobId, base64Resume)
          .then(() => {
            onClose();
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
    <Modal onClose={onClose}>
      <ContainerModal>
        <ContainerText>
          <Text variant="subheading">FullStack Developer - Glovo SL</Text>
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
