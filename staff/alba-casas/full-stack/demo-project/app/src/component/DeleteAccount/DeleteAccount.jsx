import { unregisterUser } from "../../logic";

const DeleteAccount = ({ showLogin }) => {
  const unregister = (event) => {
    event.preventDefault();

    const {
      target: {
        password: { value: password },
      },
    } = event;

    try {
      unregisterUser(sessionStorage.token, password)
        .then(showLogin)
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={unregister}>
      <input name="password" type="password" placeholder="Password"></input>
      <button>Delete Account</button>
    </form>
  );
};

export default DeleteAccount;
