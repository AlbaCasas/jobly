import { validators } from "commons/src/index";
import client from "./client";

const { validateString, validateEmail, validatePassword } = validators;

function registerCandidate(name, email, password, location, phone) {
  validateString(name);
  validateEmail(email);
  validatePassword(password);
  validateString(location);

  return client("/api/candidate", {
    body: { name, email, password, location, phone },
    method: "POST",
  });
}

export default registerCandidate;
