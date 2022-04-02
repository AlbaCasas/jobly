import React from "react";
import { DropdownItem, StyledDropdown } from "./styled";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({ isShown, closeDropdown, role }) => {
  const navigate = useNavigate();

  return !!isShown ? (
    <OutsideClickHandler onOutsideClick={closeDropdown}>
      <StyledDropdown>
        <Text variant="caption-bold" color="gray">
          Profile
        </Text>
        <DropdownItem
          onClick={() => {
            navigate("/profile");
          }}
        >
          <Text variant="caption">View Profile</Text>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            navigate(`/job/${role}`);
          }}
        >
          <Text variant="caption">My jobs</Text>
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            delete sessionStorage.token;
            navigate("/login");
          }}
        >
          <Text cursorPointer="cursor-pointer" as="a" variant="caption">
            Log Out
          </Text>
        </DropdownItem>
      </StyledDropdown>
    </OutsideClickHandler>
  ) : null;
};

export default Dropdown;
