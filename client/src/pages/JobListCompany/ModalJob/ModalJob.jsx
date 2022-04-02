import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { createJob, listJobsFromCompany } from '../../../api';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import {
  Content,
  Header,
  TextArea,
  SubmitButton,
  CancelButton,
  Wrapper,
  StyledSelect,
} from './styled';
import Context from '../../../Context';
import { DEFAULT_ERROR } from '../../../constants/feedbacks';
import { cities, roles } from '../../constants/data';

const ModalJob = ({ onClose, setJobList }) => {
  const { setFeedback } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (values) => {
    const { title, role, location, description } = values;

    try {
      await createJob(sessionStorage.token, {
        title,
        role,
        location,
        description,
      });
      const jobs = await listJobsFromCompany(sessionStorage.token);
      setJobList(jobs);
      onClose();
      setFeedback({
        message: 'Job created successfully.',
        level: 'success',
      });
    } catch (error) {
      onClose();
      setFeedback(DEFAULT_ERROR);
    }
  };

  return (
    <Modal onSubmit={handleSubmit(submit)} as="form" onClose={onClose}>
      <Header>
        <Text variant="subheading">Create a new job posting</Text>
      </Header>
      <Content>
        <Input
          {...register('title', { required: 'This field is required' })}
          placeholder="Job title"
          error={errors.title?.message}
        />
        <Wrapper>
          <StyledSelect
            {...register('role', { required: 'This field is required' })}
            placeholder="Role type"
            options={roles}
            error={errors.role?.message}
            required={true}
          ></StyledSelect>
          <StyledSelect
            {...register('location', { required: 'This field is required' })}
            placeholder="Location"
            options={cities}
            error={errors.location?.message}
            required={true}
          ></StyledSelect>
        </Wrapper>
        <TextArea
          {...register('description', { required: 'This field is required' })}
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
