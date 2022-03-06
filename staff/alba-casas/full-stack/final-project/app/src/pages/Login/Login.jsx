import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Logo from "../../assets/logo.png";
import CardImage from "../../assets/job-card.svg";
import {
  View,
  StyledButton,
  LeftSection,
  RightSection,
  Illustration,
  LoginForm,
} from "./styled";
import { authenticateUser } from "../../api";

const Login = () => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    const {
      target: {
        email: { value: email },
        password: { value: password },
      },
    } = event;

    try {
      authenticateUser(email, password)
        .then((token) => {
          sessionStorage.token = token;
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      alert(error.message);
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
        <LoginForm onSubmit={login}>
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
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
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
