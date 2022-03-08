import React from "react";
import {
  ContainerMyJobs,
  ContainerSelect,
  ContainerSelectViewProfile,
  StyledDropdown,
} from "./styled";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({ isShown, closeDropdown, role }) => {
  const navigate = useNavigate();

  return !!isShown ? (
    <OutsideClickHandler onOutsideClick={closeDropdown}>
      <StyledDropdown>
        <ContainerSelect>
          <Text variant="captionBold">Profile</Text>
        </ContainerSelect>
        <ContainerSelectViewProfile>
          <Text variant="caption">View Profile</Text>
        </ContainerSelectViewProfile>
        {role === "company" ? (
          <ContainerMyJobs>
            <Text variant="caption">My jobs</Text>
          </ContainerMyJobs>
        ) : null}
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
      </StyledDropdown>
    </OutsideClickHandler>
  ) : null;
};

export default Dropdown;
