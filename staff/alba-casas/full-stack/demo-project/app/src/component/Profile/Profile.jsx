import { retrieveUser, updateUser } from "../../logic";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = ({ onBack, onDeleteAccount }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then(({ name, email }) => {
          setName(name);
          setEmail(email);
        })
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  }, []);
  const update = (event) => {
    event.preventDefault();
    const {
      target: {
        name: { value: name },
        email: { value: email },
      },
    } = event;

    try {
      updateUser(sessionStorage.token, name, email).then(alert("user updated"));
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container className="profile__container">
      <h1>Profile</h1>
      <form className="profile__form" onSubmit={update} method="post">
        <label>Name</label>
        <input type="text" name="name" placeholder="name" defaultValue={name} />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={email}
        />
        <button>Update user</button>
      </form>
      <a
        href="javascript"
        onClick={(event) => {
          event.preventDefault();
          onDeleteAccount();
        }}
      >
        Delete account
      </a>
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

export default Profile;
