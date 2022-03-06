import { Link, useNavigate } from "react-router-dom";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Input from "../../components/Input";
import {
  ArrowBack,
  GoBackText,
  InputForm,
  InputsGrid,
  ResponsiveText,
  StyledTopWrapper,
  SwitchContainer,
  View,
} from "./styled";
import { StyledButton, RegisterForm } from "./styled";
import { useState } from "react";
import CardButton from "../../components/CardButton";
import {
  authenticateUser,
  registerCandidate,
  registerCompany,
} from "../../api";

const Signup = () => {
  const [isActiveCandidate, setIsActiveCandidate] = useState(true);
  const isActiveCompany = !isActiveCandidate;
  const placeholder = isActiveCandidate ? "Full name" : "Fiscal name";
  const navigate = useNavigate();

  const handleClickCandidate = () => {
    setIsActiveCandidate(true);
  };

  const handleClickCompany = () => {
    setIsActiveCandidate(false);
  };

  const signup = (event) => {
    event.preventDefault();

    const {
      target: {
        name: { value: name },
        email: { value: email },
        password: { value: password },
        location: { value: location },
        phone: { value: phone },
      },
    } = event;

    if (isActiveCandidate) {
      try {
        registerCandidate(name, email, password, location, phone)
          .then(() => {
            try {
              authenticateUser(email, password)
                .then((token) => (sessionStorage.token = token))
                .then(() => navigate("/"));
            } catch (error) {
              alert(error.message);
            }
            alert("user registered");
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        registerCompany(name, email, password, location, phone)
          .then(() => {
            try {
              authenticateUser(email, password).then(() => navigate("/"));
            } catch (error) {
              alert(error.message);
            }
            alert("user registered");
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <View>
      <Box
        justifyContent="space-evently"
        flexDirection="column"
        alignItems="center"
      >
        <StyledTopWrapper flexDirection="column">
          <GoBackText forwardedAs={Link} to="/login" variant="link">
            <ArrowBack />
            Go back to login
          </GoBackText>
        </StyledTopWrapper>
        <RegisterForm
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="40px"
        >
          <Box
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginBottom="8px"
            gap="12px"
          >
            <Text variant="heading" textAlign="center">
              Welcome to Jobly
            </Text>
            <ResponsiveText>
              We are almost done! Please fill in some data
            </ResponsiveText>
          </Box>
          <SwitchContainer>
            <CardButton
              onClick={handleClickCandidate}
              isActive={isActiveCandidate}
              icon={<MdPerson />}
            >
              I'm a Candidate
            </CardButton>
            <CardButton
              onClick={handleClickCompany}
              isActive={isActiveCompany}
              icon={<MdWorkOutline />}
            >
              I'm a Company
            </CardButton>
          </SwitchContainer>
          <Box
            justifyContent="center"
            gap="24px"
            flexDirection="column"
            alignItems="center"
          >
            <InputForm onSubmit={signup}>
              <Input name="name" placeholder={placeholder} />
              <InputsGrid>
                <Input name="location" placeholder="Location" />
                <Input name="phone" type="tel" placeholder="Phone" />
              </InputsGrid>
              <Input name="email" type="email" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
              <Box>
                <StyledButton>Sign Up</StyledButton>
              </Box>
            </InputForm>
          </Box>
        </RegisterForm>
      </Box>
    </View>
  );
};

export default Signup;
