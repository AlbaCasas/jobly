import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Logo from '../../assets/logo.png';
import CardImage from '../../assets/job-card.svg';
import {
  View,
  StyledButton,
  LeftSection,
  RightSection,
  Illustration,
  LoginForm,
} from './styled';
import { authenticateUser } from '../../api';
import { useForm } from 'react-hook-form';
import Context from '../../Context';
import { DEFAULT_ERROR } from '../../constants/feedbacks';

const Login = () => {
  const { setFeedback, loadUser } = useContext(Context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (values) => {
    const { email, password } = values;

    try {
      const token = await authenticateUser(email, password);
      sessionStorage.token = token;
      await loadUser();
      navigate('/');
      setFeedback({
        message: 'User logged in successfully.',
        level: 'success',
      });
    } catch (error) {
      setFeedback(DEFAULT_ERROR);
    }
  };
  return (
    <View>
      <LeftSection>
        <Box
          gap="16px"
          width="320px"
          flexDirection="column"
          alignItems="center"
        >
          <Illustration src={CardImage} alt="job card" />
          <Text textAlign="center" color="white" variant="subheading">
            Easily find your dream tech job
          </Text>
          <Text textAlign="center" color="white">
            With our search engine you will be able to find and apply to the
            best companies
          </Text>
        </Box>
      </LeftSection>
      <RightSection>
        <LoginForm onSubmit={handleSubmit(submit)}>
          <Box flexDirection="column" alignItems="center" gap="32px">
            <img src={Logo} alt="Jobly" />
            <Box flexDirection="column" alignItems="center" gap="12px">
              <Text variant="heading">Hello there!</Text>
              <Text textAlign="center">
                Welcome to Jobly, the sure and proven way to connect
                professionals in tech
              </Text>
            </Box>
            <Box gap="48px" flexDirection="column">
              <Box gap="24px" flexDirection="column">
                <Input
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  error={errors.email?.message}
                />
                <Input
                  {...register('password', {
                    required: 'This field is required',
                  })}
                  type="password"
                  placeholder="Password"
                  error={errors.password?.message}
                />
              </Box>
              <StyledButton>Login</StyledButton>
            </Box>
          </Box>
          <Box justifyContent="center" gap="8px">
            <Text>Don’t have an account yet?</Text>
            <Text as={Link} to="/signup" variant="link">
              Sign Up
            </Text>
          </Box>
        </LoginForm>
      </RightSection>
    </View>
  );
};

export default Login;
