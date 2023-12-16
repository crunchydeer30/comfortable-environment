import { AuthResponse } from "../types";

const saveUser = (user: AuthResponse) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const loadUser = (): AuthResponse | null => {
  const user = window.localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

const removeUser = () => {
  localStorage.removeItem("user");
}

export default {
  saveUser,
  loadUser,
  removeUser
}