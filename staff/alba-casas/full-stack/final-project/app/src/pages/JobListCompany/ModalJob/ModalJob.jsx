import React from "react";
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

const ModalJob = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      target: {
        title: { value: title },
        role: { value: role },
        location: { value: location },
        description: { value: description },
      },
    } = event;

    try {
      createJob(sessionStorage.token, { title, role, location, description })
        .then(alert("job created"))
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Modal onSubmit={handleSubmit} as="form" onClose={onClose}>
      <Header>
        <Text variant="subheading">Create a new job posting</Text>
      </Header>
      <Content>
        <Input name="title" placeholder="Job title" />
        <Wrapper>
          <SelectRole name="role" placeholder="Role type">
            <option value="" selected="selected">
              I'm looking for a
            </option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="product">Product</option>/
          </SelectRole>
          <Input name="location" placeholder="Location" />
        </Wrapper>
        <TextArea name="description" placeholder="Description" />
      </Content>
      <SubmitButton>Create job posting</SubmitButton>
      <CancelButton onClick={onClose}>Cancel</CancelButton>
    </Modal>
  );
};

export default ModalJob;
