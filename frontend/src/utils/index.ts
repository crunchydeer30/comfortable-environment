import { AxiosError } from "axios";
import authService from "../features/auth/services/auth.service";
import toast from "react-hot-toast";

export const makeAuthHeader = () => {
  return {
    Authorization: authService.loadUser()
      ? `Bearer ${authService.loadUser()!.token}`
      : null,
  };
};

export const errorToats = (e: unknown) => {
  if (e instanceof AxiosError) {
    toast.error(e.response?.data.error || 'Something went wrong');
  } else {
    toast.error('Something went wrong');
  }
};

export const generateError = (e: unknown) => {
  if (e instanceof AxiosError) {
    return e.response?.data.error || 'Something went wrong';
  } else {
    return 'Something went wrong';
  }
}