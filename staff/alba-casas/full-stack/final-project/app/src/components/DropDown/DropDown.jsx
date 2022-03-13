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
        <DropdownItem>
          <Text
            onClick={() => {
              navigate("/profile");
            }}
            variant="caption"
          >
            View Profile
          </Text>
        </DropdownItem>
        <DropdownItem>
          <Text
            onClick={() => {
              navigate(`/job/${role}`);
            }}
            variant="caption"
          >
            My jobs
          </Text>
        </DropdownItem>
        <DropdownItem>
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
        </DropdownItem>
      </StyledDropdown>
    </OutsideClickHandler>
  ) : null;
};

export default Dropdown;
