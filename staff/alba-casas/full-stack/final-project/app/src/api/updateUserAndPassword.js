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
  if (!currPassword && !newPassword && !retypePassword) {
    updateUser(
      sessionStorage.token,
      name,
      email,
      phone,
      location,
      avatar
    ).catch((error) => alert(error.message));
  } else {
    updateUser(sessionStorage.token, name, email, phone, location, avatar)
      .then(() => {
        updateUserPassword(
          sessionStorage.token,
          currPassword,
          newPassword,
          retypePassword
        );
      })
      .catch((error) => alert(error.message));
  }
};
