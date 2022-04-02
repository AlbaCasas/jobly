import registerUser from "../../logic/registerUser";
import "./Register.css";

function Register() {
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
        .then(() => alert("user registered"))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="register__form" onSubmit={register}>
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button>Register</button>
    </form>
  );
}

export default Register;
