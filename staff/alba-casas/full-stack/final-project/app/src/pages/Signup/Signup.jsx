import { Link } from "react-router-dom";
import { MdWorkOutline, MdPerson, MdArrowBack } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Input from "../../components/Input";
import {
  ArrowBack,
  GoBackText,
  InputsGrid,
  ResponsiveText,
  SwitchContainer,
  View,
} from "./styled";
import { StyledButton, RegisterForm } from "./styled";
import { useState } from "react";
import CardButton from "../../components/CardButton";

const Signup = () => {
  const [isActiveCandidate, setIsActiveCandidate] = useState(true);
  const isActiveCompany = !isActiveCandidate;
  const placeholder = isActiveCandidate ? "Full name" : "Fiscal name";

  const handleClickCandidate = () => {
    setIsActiveCandidate(true);
  };

  const handleClickCompany = () => {
    setIsActiveCandidate(false);
  };

  return (
    <View>
      <Box
        justifyContent="space-evently"
        flexDirection="column"
        alignItems="center"
      >
        <Box flexDirection="column" margin="40px">
          <GoBackText forwardedAs={Link} to="/login" variant="link">
            <ArrowBack />
            Go back to login
          </GoBackText>
        </Box>
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
            <Input placeholder={placeholder} />
            <InputsGrid>
              <Input placeholder="Location" />
              <Input type="number" placeholder="Phone" />
            </InputsGrid>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </Box>
          <Box>
            <StyledButton>Sign Up</StyledButton>
          </Box>
        </RegisterForm>
      </Box>
    </View>
  );
};

export default Signup;
