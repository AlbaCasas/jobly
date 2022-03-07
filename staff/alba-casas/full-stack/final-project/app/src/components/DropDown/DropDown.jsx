import React from "react";
import {
  ContainerSelect,
  ContainerSelectViewProfile,
  StyledDropDown,
} from "./styled";
import Text from "../Text";
import { useNavigate } from "react-router-dom";

const DropDown = ({ isShownDropDown }) => {
  const navigate = useNavigate();

  return !!isShownDropDown ? (
    <StyledDropDown>
      <ContainerSelect>
        <Text variant="captionBold">Profile</Text>
      </ContainerSelect>
      <ContainerSelectViewProfile>
        <Text variant="caption">View Profile</Text>
      </ContainerSelectViewProfile>
      <ContainerSelect>
        <Text
          cursorPointer="cursor-pointer"
          as="a"
          onClick={() => {
            delete sessionStorage.token;
            navigate("/login");
          }}
          variant="caption"
        >
          Log Out
        </Text>
      </ContainerSelect>
    </StyledDropDown>
  ) : null;
};

export default DropDown;
