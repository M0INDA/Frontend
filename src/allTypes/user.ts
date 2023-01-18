export interface ILogin {
  email: string;
  password: string;
  nickname: string;
}

export interface ISignUp {
  email: string;
  password: string;
  nickname: string;
  emailCode: number;
}
