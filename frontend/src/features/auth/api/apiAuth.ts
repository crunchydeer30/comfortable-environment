import axios from "axios";
import { HOST_NAME } from "../../../config";
import { AuthResponse, SignInCredentials, SignUpCredentials } from "../types";
import { makeAuthHeader } from "../../../utils";
import authService from "../services/auth.service";

const BASE_URL = `${HOST_NAME}/api/auth`;

const signIn = async (credentials: SignInCredentials) => {
  const response = await axios.post(BASE_URL, credentials);
  return response.data;
};

const signUp = async (credentials: SignUpCredentials) => {
  const response = await axios.post(`${BASE_URL}/signup`, credentials);
  return response.data;
}

const validateUser = async (user: AuthResponse | undefined | null): Promise<AuthResponse | null> => {
  if (!user) return null;
  try {
    const response = await axios.get(`${BASE_URL}/validate`, { headers: makeAuthHeader() });
    return response.data;
  } catch (e) {
    authService.removeUser();
    return null;
  }
} 

export default { signIn, signUp, validateUser };
