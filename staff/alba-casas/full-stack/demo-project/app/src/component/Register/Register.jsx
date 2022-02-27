import registerUser from "../../logic/registerUser";
import "./Register.css";

function Register({ onLogin }) {
  const register = (event) => {
    event.preventDefault();

    const {
      target: {
        name: { value: name },
        email: { value: email },
        password: { value: password },
      },
    } = event;

    try {
      registerUser(name, email, password)
        .then(() => {
          alert("user registered");
          onLogin();
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  const goToLogin = (event) => {
    event.preventDefault();

    onLogin();
  };

  return (
    <form className="register__form" onSubmit={register}>
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button>Register</button>
      <a onClick={goToLogin} href="javascript">
        Login
      </a>
    </form>
  );
}

export default Register;
