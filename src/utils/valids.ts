/** 이메일 검증 */
export const emailValid = () => ({
  required: "이메일을 입력해주세요",
  pattern: {
    value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    message: "올바른 이메일 형식을 입력해주세요.",
  },
});

/** 비밀번호 검증 */
export const passwordValid = () => ({
  required: "비밀번호를 입력해주세요.",
  maxLength: {
    value: 20,
    message: "20자리 이하로 작성해주세요",
  },
  minLength: {
    value: 8,
    message: "8자리 이상으로 작성해주세요",
  },
  pattern: {
    value:
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    message: "영어, 특수문자 포함 8~20자리 입니다.",
  },
});
