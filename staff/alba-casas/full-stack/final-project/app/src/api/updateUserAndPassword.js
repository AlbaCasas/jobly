import { updateUser } from "./updateUser";
import { updateUserPassword } from "./updateUserPassword";

export const updateUserAndPassword = ({
  currPassword,
  newPassword,
  retypePassword,
  name,
  email,
  location,
  phone,
  avatar,
}) => {
  if (
    currPassword.length === 0 &&
    newPassword.length === 0 &&
    retypePassword.length === 0
  ) {
    updateUser(sessionStorage.token, name, email, phone, location, avatar)
      .then(() => {
        alert("user update");
      })
      .catch((error) => alert(error.message));
  } else {
    updateUser(sessionStorage.token, name, email, phone, location, avatar)
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
};
