export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  emailCode: number;
}
