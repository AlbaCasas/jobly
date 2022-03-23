import React, { useContext } from "react";
import Box from "../../../components/Box";
import Modal from "../../../components/Modal";
import Text from "../../../components/Text";
import { ContainerText } from "../styled";
import { ContainerModal, DeleteButton, ModalInput } from "./styled";
import { useForm } from "react-hook-form";
import Context from "../../../Context";
import { deleteAccount } from "../../../api";

const ModalDeleteAccount = ({ onClose }) => {
  const { setFeedback } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (values) => {
    const { password } = values;

    try {
      deleteAccount(sessionStorage.token, password)
        .then(() => {
          delete sessionStorage.token;
          setFeedback({
            message: "Account deleted",
            level: "success",
          });
        })
        .catch((error) => {
          setFeedback({
            message: error.message,
            level: "error",
          });
        });
    } catch {
      setFeedback({
        message: "Uh oh, there was a problem with your request.",
        level: "error",
      });
    }
  };
  return (
    <Modal as="form" onSubmit={handleSubmit(submit)} onClose={onClose}>
      <ContainerModal>
        <ContainerText>
          <Text variant="subheading">
            Are you sure you want to delete your account?
          </Text>
          <Box marginTop="8px" flexDirection="column" alignItems="center">
            <Text>If you delete the account, your data will be lost.</Text>
            <Text>Confirm your password to delete it.</Text>
          </Box>
        </ContainerText>
        <Box gap="24px" flexDirection="column" alignItems="center">
          <ModalInput
            {...register("password", { required: "This field is required" })}
            type="password"
            placeholder="password"
            error={errors.password?.message}
          />
          <DeleteButton>Delete</DeleteButton>
        </Box>
      </ContainerModal>
    </Modal>
  );
};

export default ModalDeleteAccount;
