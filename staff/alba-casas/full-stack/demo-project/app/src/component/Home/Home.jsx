import { useEffect, useState } from "react";
import { retrieveUser } from "../../logic";

const Home = ({ onDeleteAccount }) => {
  const [name, setName] = useState();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setName(user.name))
        .catch((error) => alert(error.message));
    } catch (error) {
      alert(error.message);
    }
  });

  return (
    <div>
      <h1>Welcome home, {name}!</h1>
      <button
        onClick={() => {
          onDeleteAccount();
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Home;
