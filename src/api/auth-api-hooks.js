import axiosInstance from "./axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useLogin = (options) =>
  useMutation(
    ({ email, password }) =>
      axiosInstance.post("Account/login", { email, password }),
    options
  );
