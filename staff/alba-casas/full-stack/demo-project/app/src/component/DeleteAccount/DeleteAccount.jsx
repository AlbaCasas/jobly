import { unregisterUser } from "../../logic";
import Container from "../Container/Container";
import "./DeleteAccount.css";

const DeleteAccount = ({ showLogin, onBack }) => {
  const unregister = (event) => {
    event.preventDefault();

    const {
      target: {
        password: { value: password },
      },
    } = event;

    try {
      unregisterUser(sessionStorage.token, password)
        .then(alert("deleted user"))
        .then(delete sessionStorage.token)
        .then(showLogin)
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container className="container__delete-account">
      <h1>Delete account</h1>
      <form className="form__delete-account" onSubmit={unregister}>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password"></input>
        <button>Delete Account</button>
      </form>
      {/*  <a
        href="javascript"
        onClick={(event) => {
          event.preventDefault();
          onBack();
        }}
      >
        Back
      </a> */}
    </Container>
  );
};

export default DeleteAccount;
