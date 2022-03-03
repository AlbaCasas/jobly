import { updateUserPassword } from "../../logic";
import Container from "../Container/Container";

const UpdatePassword = ({ onBack }) => {
  const updatePassword = (event) => {
    event.preventDefault();
    const {
      target: {
        currPassword: { value: currPassword },
        newPassword: { value: newPassword },
        retypePassword: { value: retypePassword },
      },
    } = event;

    try {
      updateUserPassword(sessionStorage.token, currPassword, newPassword, retypePassword )
      .then(() => {
        alert('Password updated')})
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container className="profile__container">
      <h1>Update Password</h1>
      <form className="profile__form" onSubmit={updatePassword} method="post">
        <label>Current password</label>
        <input
          type="password"
          name="currPassword"
          placeholder="Actual password"
        />
        <label>New password</label>
        <input type="password" name="newPassword" placeholder="New password" />
        <label>Retype password</label>
        <input
          type="password"
          name="retypePassword"
          placeholder="Retype password"
        />
        <button>Update password</button>
      </form>
      <a
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
        href="javascript"
      >
        Back
      </a>
    </Container>
  );
};

export default UpdatePassword;
