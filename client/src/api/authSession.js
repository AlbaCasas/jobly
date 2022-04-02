import { authenticateUser } from './authenticateUser';

export const authSession = async (email, password) => {
  const token = await authenticateUser(email, password);
  sessionStorage.token = token;
};
