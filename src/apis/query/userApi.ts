import { ICheckEmail, ICheckNickname } from "./../../allTypes/user";
import { ILogin, ISignUp } from "allTypes/user";
import axios from "axios";

/** 회원가입 api */
export const signUp = async (data: ISignUp) => {
  const response = await axios.post("user/signup", data);
  return response;
};
/** 로그인 api */
export const logIn = async (data: ILogin) => {
  const response = await axios.post("user/login", data, {
    withCredentials: true,
  });
  return response;
};

/** 이메일 중복검사 api */
export const checkEmail = async (email: ICheckEmail) => {
  const response = await axios.post("auth/nodemailer", email);
  return response;
};

/** 닉네임 중복검사 api */
export const checkNickname = async (data: ICheckNickname) => {
  const response = await axios.post("user/checkNick", data);
  return response;
};
