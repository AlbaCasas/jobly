import { Link } from "react-router-dom";
import { MdWorkOutline, MdPerson } from "react-icons/md";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Input from "../../components/Input";
import { View } from "./styled";
import { StyledButton, StyledCardButton } from "./styled";

const Signup = () => {
  return (
    <View>
      <Box
        justifyContent="space-evently"
        flexDirection="column"
        alignItems="center"
      >
        <Box flexDirection="column" margin="40px">
          <Text as={Link} to="/login" variant="link">
            Go back to login
          </Text>
        </Box>
        <Box
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
          >
            <Text variant="heading" textAlign="center">
              Welcome to Jobly
            </Text>
          </Box>
          <Box justifyContent="center" alignItems="center" gap="72px">
            <StyledCardButton isActive icon={<MdPerson />}></StyledCardButton>
            <StyledCardButton icon={<MdWorkOutline />}></StyledCardButton>
          </Box>
          <Box
            justifyContent="center"
            gap="24px"
            flexDirection="column"
            alignItems="center"
          >
            <Input placeholder="Full name" />
            <Input placeholder="Location" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </Box>
          <Box>
            <StyledButton>Sign Up</StyledButton>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default Signup;
