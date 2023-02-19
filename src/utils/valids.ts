import { RegisterOptions } from "react-hook-form";

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

/** 비밀번호 확인 검증 */
export const passwordCheckValid = (options?: RegisterOptions) => ({
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
  ...options,
});

/** 닉네임 검증 */
export const nicknameValid = () => ({
  required: "닉네임을 입력해주세요.",
  maxLength: {
    value: 10,
    message: "10자리 이하로 작성해주세요",
  },
  minLength: {
    value: 2,
    message: "2자리 이상으로 작성해주세요",
  },
  pattern: {
    value: /^[가-힣a-zA-Z]+$/,
    message: "사용 불가능한 닉네임입니다.",
  },
});

export const regOptIcon = () => ({
  required: "대표 아이콘이 설정되지 않았습니다.",
});

export const regOptTitle = () => ({
  required: "모집글 제목이 입력되지 않았습니다.",
  maxLength: {
    value: 64,
    message: "64자 이하의 제목만 사용가능합니다.",
  },
});

export const regOptStudyName = () => ({
  required: "스터디 팀 이름이 입력되지 않았습니다.",
  maxLength: {
    value: 25,
    message: "25자 이하의 팀 이름만 사용가능합니다.",
  },
});

export const regOptTel = () => ({
  required: "연락 수단이 입력되지 않았습니다",
  pattern: {
    value: /^(010|011|016|017|018|019)[0-9\b ]{0,11}$/,
    message: " '-'없이, 휴대번호 형식만 가능합니다. ",
  },
});

export const regOptHashtag = () => ({
  required: "연락 수단이 입력되지 않았습니다",
  maxLength: {
    value: 3,
    message: "최대 3개의 태그만 등록가능합니다.",
  },
});

export const regOptStartDate = () => ({
  required: "시작일이 등록되지 않았습니다",
});

export const regOptContent = () => ({
  required: "내용이 입력되지 않았습니다.",
  maxLength: {
    value: 3000,
    message: "스터디 내용은 3_000자 이상을 넘을 수 없습니다.",
  },
});
