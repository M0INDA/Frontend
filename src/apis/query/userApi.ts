import {
  ICheckEmail,
  ICheckEmailCode,
  ICheckNickname,
} from "./../../allTypes/user";
import { ILogin, ISignUp } from "allTypes/user";
import { instance } from "@apis/axios";

// 회원가입 api
export const signUp = async (data: ISignUp) => {
  const response = await instance.post("users/signup", data);
  return response;
};

// 로그인 api
export const logIn = async (data: ILogin) => {
  const response = await instance.post("users/login", data);
  return response;
};

// 이메일 중복검사
export const checkEmail = async (data: ICheckEmail) => {
  const response = await instance.post("users/checkEmail", data);
  return response;
};

// 인증 코드 검사
export const checkEmailNum = async (data: ICheckEmailCode) => {
  const response = await instance.post("users/checkEmailCode", data);
  return response;
};

// 닉네임 중복 검사
export const checkNickname = async (data: ICheckNickname) => {
  const response = await instance.post("users/checkNick", data);
  return response;
};
