import React from "react";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Text from "../../components/Text";
import Logo from "../../assets/logo.png";

import { View, StyledButton, LeftSection, RightSection } from "./styled";

const Login = () => {
  return (
    <View>
      <LeftSection />
      <RightSection>
        <Box flexDirection={"column"} alignItems={"center"} gap="12px">
          <img src={Logo} alt="Jobly" />
          <Text variant="heading">Hello there!</Text>
          <Text textAlign={"center"}>
            Welcome to Jobly, the sure and proven way to connect professionals
            in tech
          </Text>
        </Box>
        <Box gap="48px" flexDirection="column">
          <Box gap="24px" flexDirection="column">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </Box>
          <StyledButton>Login</StyledButton>
        </Box>
        <Box justifyContent={"center"} gap="8px">
          <Text>Don’t have an account yet?</Text>
          <Text variant="link">Sign Up</Text>
        </Box>
      </RightSection>
    </View>
  );
};

export default Login;
