import registerUser from "../../logic/registerUser";
import Container from "../Container/Container";
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
    <Container className="container__register">
      <form className="register__form" onSubmit={register}>
        <label>Name</label>
        <input type="text" name="name" placeholder="name" />
        <label>Email</label>
        <input type="email" name="email" placeholder="email" />
        <label>Password</label>
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
      </form>
      <a onClick={goToLogin} href="javascript">
        Login
      </a>
    </Container>
  );
}

export default Register;
