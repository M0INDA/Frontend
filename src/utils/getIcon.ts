import Icon1 from "@assets/icons/Icon1.svg";
import Icon2 from "@assets/icons/Icon2.svg";
import Icon3 from "@assets/icons/Icon3.svg";
import Icon4 from "@assets/icons/Icon4.svg";
import Icon5 from "@assets/icons/Icon5.svg";
import Icon6 from "@assets/icons/Icon6.svg";
import Icon7 from "@assets/icons/Icon7.svg";
import Icon8 from "@assets/icons/Icon8.svg";
import Icon9 from "@assets/icons/Icon9.svg";
import Icon10 from "@assets/icons/Icon10.svg";
import Icon11 from "@assets/icons/Icon11.svg";
import Icon12 from "@assets/icons/Icon12.svg";
import Icon13 from "@assets/icons/Icon13.svg";
import Icon14 from "@assets/icons/Icon14.svg";
import Icon15 from "@assets/icons/Icon15.svg";
import Icon16 from "@assets/icons/Icon16.svg";
import Icon17 from "@assets/icons/Icon17.svg";
import Icon18 from "@assets/icons/Icon18.svg";
import Icon19 from "@assets/icons/Icon19.svg";
import Icon20 from "@assets/icons/Icon20.svg";

export type TNumber =
  | "ONE"
  | "TWO"
  | "THREE"
  | "FOUR"
  | "FIVE"
  | "SIX"
  | "SEVEN"
  | "EIGHT"
  | "NINE"
  | "TEN"
  | "ELEVEN"
  | "TWELVE"
  | "THIRTEEN"
  | "FOURTTEN"
  | "FIFTEEN"
  | "SIXTEEN"
  | "SEVENTEEN"
  | "EIGHTEEN"
  | "NINETEEN"
  | "TWENTY";

export const icons = {
  ONE: Icon1,
  TWO: Icon2,
  THREE: Icon3,
  FOUR: Icon4,
  FIVE: Icon5,
  SIX: Icon6,
  SEVEN: Icon7,
  EIGHT: Icon8,
  NINE: Icon9,
  TEN: Icon10,
  ELEVEN: Icon11,
  TWELVE: Icon12,
  THIRTEEN: Icon13,
  FOURTTEN: Icon14,
  FIFTEEN: Icon15,
  SIXTEEN: Icon16,
  SEVENTEEN: Icon17,
  EIGHTEEN: Icon18,
  NINETEEN: Icon19,
  TWENTY: Icon20,
};

export const iconBackgrounds = {
  ONE: "bg-[#F5BEBE]",
  TWO: "bg-[#B0F47B]",
  THREE: "bg-[#94B7F7]",
  FOUR: "bg-[#F7D594]",
  FIVE: "bg-[#FFA07D]",
  SIX: "bg-[#F7D594]",
  SEVEN: "bg-[#FFA07D]",
  EIGHT: "bg-[#B0F47B]",
  NINE: "bg-[#FFA07D]",
  TEN: "bg-[#F5BEBE]",
  ELEVEN: "bg-[#94B7F7]",
  TWELVE: "bg-[#B0F47B]",
  THIRTEEN: "bg-[#F7D594]",
  FOURTTEN: "bg-[#F5BEBE]",
  FIFTEEN: "bg-[#F7D594]",
  SIXTEEN: "bg-[#F5BEBE]",
  SEVENTEEN: "bg-[#94B7F7]",
  EIGHTEEN: "bg-[#FFA07D]",
  NINETEEN: "bg-[#F7D594]",
  TWENTY: "bg-[#B0F47B]",
};

const getIcon = (num: TNumber) => {
  return icons[num];
};

export default getIcon;
