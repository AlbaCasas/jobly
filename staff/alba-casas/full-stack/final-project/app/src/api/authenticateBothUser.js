import { authenticateUser } from "./authenticateUser";

export const authenticateBothUser = async (email, password) => {
  const token = await authenticateUser(email, password);
  sessionStorage.token = token;
};
