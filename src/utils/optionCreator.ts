import { OptionCreator } from "@allTypes/OptionCreatorType";
import {
  IIcon,
  IRecruit,
  IGroupName,
  IContact,
  IHashtag,
  IStartdate,
  IStudyDetail,
} from "@allTypes/study";

export const optionCreator: OptionCreator = (option) => (customOpts) => {
  const [name, opts] = option;
  return [name, { ...opts, ...customOpts }];
};

export const regOptIcon = {
  icon: optionCreator<IIcon>([
    "icon",
    {
      required: "대표 아이콘이 설정되지 않았습니다.",
    },
  ]),
};

export const regOptRecruit = {
  recruittitle: optionCreator<IRecruit>([
    "recruittitle",
    {
      required: "모집글 제목이 입력되지 않았습니다.",
      maxLength: {
        value: 64,
        message: "64자 이하의 제목만 사용가능합니다.",
      },
    },
  ]),
};

export const regOptStudyGroupName = {
  studygroupname: optionCreator<IGroupName>([
    "studygroupname",
    {
      required: "스터디 팀 이름이 입력되지 않았습니다.",
      maxLength: {
        value: 25,
        message: "25자 이하의 팀 이름만 사용가능합니다.",
      },
    },
  ]),
};

export const regOptContact = {
  contact: optionCreator<IContact>([
    "contact",
    {
      required: "연락 수단이 입력되지 않았습니다",
      pattern: {
        value: /^(010|011|016|017|018|019)[0-9\b ]{0,11}$/,
        message: " '-'없이, 휴대번호 형식만 가능합니다. ",
      },
    },
  ]),
};

export const regOptHashtag = {
  hashtag: optionCreator<IHashtag>([
    "hashtag",
    {
      required: "연락 수단이 입력되지 않았습니다",
      maxLength: {
        value: 3,
        message: "최대 3개의 태그만 등록가능합니다.",
      },
    },
  ]),
};

export const regOptStartdate = {
  startdate: optionCreator<IStartdate>([
    "startdate",
    {
      required: "시작일이 등록되지 않았습니다",
    },
  ]),
};

export const regOptStudyDetail = {
  studydetail: optionCreator<IStudyDetail>([
    "studydetail",
    {
      required: "내용이 입력되지 않았습니다.",
      maxLength: {
        value: 3000,
        message: "스터디 내용은 3_000자 이상을 넘을 수 없습니다.",
      },
    },
  ]),
};
