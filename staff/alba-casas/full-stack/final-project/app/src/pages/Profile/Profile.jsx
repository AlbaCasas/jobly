import React from "react";
import Box from "../../components/Box";
import Layout from "../../components/Layout/Layout";
import {
  ContainerPhoto,
  ContainerText,
  Footer,
  Section,
  StyledButton,
  StyledDetailsText,
  StyledForm,
  StyledImage,
  StyledSpan,
  StyledSubTitle,
  Wrapper,
  WrapperHeader,
} from "./styled";
import { useEffect, useState } from "react";
import { retrieveUser, updateUser, updateUserPassword } from "../../api/";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  const [avatar, setAvatar] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then(({ avatar, name, email, location, phone }) => {
          setName(name);
          setEmail(email);
          setLocation(location);
          setPhone(phone);
          setAvatar(avatar);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const {
      target: {
        name: { value: name },
        email: { value: email },
        location: { value: location },
        phone: { value: phone },
        currPassword: { value: currPassword },
        newPassword: { value: newPassword },
        retypePassword: { value: retypePassword },
      },
    } = event;

    try {
      if (
        currPassword.length === 0 &&
        newPassword.length === 0 &&
        retypePassword.length === 0
      ) {
        updateUser(sessionStorage.token, name, email, location, phone);
        alert("user update");
      } else {
        updateUser(sessionStorage.token, name, email, location, phone)
          .then(() => {
            updateUserPassword(
              sessionStorage.token,
              currPassword,
              newPassword,
              retypePassword
            );
            alert("user update");
          })
          .catch((error) => alert(error.message));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <Section>
        <Box justifyContent="center" flexDirection="column" alignItems="center">
          <WrapperHeader>
            <ContainerPhoto>
              <StyledImage src={avatar} alt="photo" />
            </ContainerPhoto>
          </WrapperHeader>
          <ContainerText>
            <StyledDetailsText>Contact Details</StyledDetailsText>
            <StyledSpan>
              Introduce your contact details so companies can reach back to you
            </StyledSpan>
          </ContainerText>
          <StyledForm onSubmit={handleUpdateUser}>
            <Wrapper>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={email}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                defaultValue={phone}
              />
              <Input
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={location}
              />
            </Wrapper>
            <Wrapper>
              <StyledSubTitle>Modify your user settings</StyledSubTitle>
              <Input
                type="password"
                name="currPassword"
                placeholder="Current Password"
              />
              <Input
                type="password"
                name="newPassword"
                placeholder="New Password"
              />
              <Input
                type="password"
                name="retypePassword"
                placeholder="Retype Password"
              />
            </Wrapper>
            <Footer>
              <Button>Update profile</Button>
              <StyledButton
                onClick={() => {
                  navigate("/board");
                }}
              >
                Cancel
              </StyledButton>
            </Footer>
          </StyledForm>
        </Box>
      </Section>
    </Layout>
  );
};

export default Profile;
