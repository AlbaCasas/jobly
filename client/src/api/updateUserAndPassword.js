import { updateUser } from './updateUser';
import { updateUserPassword } from './updateUserPassword';

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
      localStorage.token,
      name,
      email,
      phone,
      location,
      avatar
    ).catch();
  } else {
    updateUser(localStorage.token, name, email, phone, location, avatar)
      .then(() => {
        updateUserPassword(
          localStorage.token,
          currPassword,
          newPassword,
          retypePassword
        );
      })
      .catch();
  }
};
