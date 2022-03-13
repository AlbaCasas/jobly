import React from "react";
import Layout from "../../components/Layout/Layout";
import {
  ContainerInput,
  ContainerPhoto,
  ContainerText,
  Footer,
  StyledForm,
  StyledBlueButton,
  StyledButton,
  StyledDetailsText,
  FormSection,
  StyledImage,
  HalfWidthInput,
  StyledSpan,
  StyledSubTitle,
  Wrapper,
  AvatarSection,
} from "./styled";
import { useEffect, useState } from "react";
import { retrieveUser, updateUser, updateUserPassword } from "../../api/";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => {
          setUser(user);
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
      <StyledForm onSubmit={handleUpdateUser}>
        <AvatarSection>
          <ContainerPhoto>
            <StyledImage src={user.avatar} alt="photo" />
          </ContainerPhoto>
        </AvatarSection>
        <FormSection>
          <Wrapper>
            <ContainerText>
              <StyledDetailsText>Contact Details</StyledDetailsText>
              <StyledSpan>
                Introduce your contact details so companies can reach back to
                you
              </StyledSpan>
            </ContainerText>
            <ContainerInput>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user.name}
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                defaultValue={user.email}
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                defaultValue={user.phone}
              />
              <Input
                type="text"
                name="location"
                placeholder="Location"
                defaultValue={user.location}
              />
            </ContainerInput>
          </Wrapper>
          <Wrapper>
            <StyledSubTitle>Modify your user settings</StyledSubTitle>
            <ContainerInput>
              <HalfWidthInput
                type="password"
                name="currPassword"
                placeholder="Current Password"
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                type="password"
                name="newPassword"
                placeholder="New Password"
              />
              <Input
                type="password"
                name="retypePassword"
                placeholder="Retype
                Password"
              />
            </ContainerInput>
          </Wrapper>
          <Footer>
            <StyledBlueButton>Update profile</StyledBlueButton>
            <StyledButton
              onClick={() => {
                navigate("/board");
              }}
            >
              Cancel
            </StyledButton>
          </Footer>
        </FormSection>
      </StyledForm>
    </Layout>
  );
};

export default Profile;
