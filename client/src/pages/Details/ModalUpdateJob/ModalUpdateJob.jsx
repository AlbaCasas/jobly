import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { retrieveJob, updateJob } from '../../../api';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import {
  Content,
  Header,
  TextArea,
  SubmitButton,
  CancelButton,
  StyledSelect,
  Wrapper,
} from './styled';
import Context from '../../../Context';
import { DEFAULT_ERROR } from '../../../constants/feedbacks';
import { cities, roles } from '../../../constants/data';

const ModalUpdateJob = ({ onClose, job, setJob }) => {
  const { setFeedback } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      title: job.title,
      role: job.role,
      location: job.location,
      description: job.description,
    });
  }, [job, reset]);

  const submit = async (values) => {
    const { title, role, location, description } = values;

    try {
      await updateJob(sessionStorage.token, job?.id, {
        title,
        role,
        location,
        description,
      });
      const updatedJob = await retrieveJob(sessionStorage.token, job.id);
      setJob(updatedJob);
      onClose();
      setFeedback({
        message: 'Job updated successfully.',
        level: 'success',
      });
    } catch (error) {
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
            {...register('role', { required: 'select one option' })}
            placeholder="Role type"
            error={errors.role?.message}
            options={roles}
            required={true}
          ></StyledSelect>
          <StyledSelect
            {...register('location', { required: 'This field is required' })}
            placeholder="Location"
            error={errors.location?.message}
            options={cities}
            required={true}
          ></StyledSelect>
        </Wrapper>
        <TextArea
          {...register('description', { required: 'This field is required' })}
          placeholder="Description"
          error={errors.location?.message}
        />
      </Content>
      <SubmitButton>Update job</SubmitButton>
      <CancelButton onClick={onClose}>Cancel</CancelButton>
    </Modal>
  );
};

export default ModalUpdateJob;
