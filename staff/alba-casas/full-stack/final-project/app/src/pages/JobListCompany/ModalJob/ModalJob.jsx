import React from "react";
import { useForm } from "react-hook-form";
import { createJob } from "../../../api";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Text from "../../../components/Text";
import {
  Content,
  Header,
  TextArea,
  SubmitButton,
  CancelButton,
  SelectRole,
  Wrapper,
} from "./styled";

const ModalJob = ({ onClose, isShowToast, isShowErrorToast }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (values) => {
    const { title, role, location, description } = values;

    try {
      createJob(sessionStorage.token, { title, role, location, description })
        .then(() => {
          onClose();
          isShowToast(true);
        })
        .catch((error) => {
          onClose();
          isShowErrorToast(true);
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Modal onSubmit={handleSubmit(submit)} as="form" onClose={onClose}>
      <Header>
        <Text variant="subheading">Create a new job posting</Text>
      </Header>
      <Content>
        <Input
          {...register("title", { required: "This field is required" })}
          placeholder="Job title"
          error={errors.title?.message}
        />
        <Wrapper>
          <SelectRole
            {...register("role", { required: "select one option" })}
            placeholder="Role type"
            error={errors.role?.message}
          >
            <option value="" selected="selected">
              I'm looking for a
            </option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="product">Product</option>
          </SelectRole>
          <Input
            {...register("location", { required: "This field is required" })}
            placeholder="Location"
            error={errors.location?.message}
          />
        </Wrapper>
        <TextArea
          {...register("description", { required: "This field is required" })}
          placeholder="Description"
          error={errors.location?.message}
        />
      </Content>
      <SubmitButton>Create job posting</SubmitButton>
      <CancelButton onClick={onClose}>Cancel</CancelButton>
    </Modal>
  );
};

export default ModalJob;
