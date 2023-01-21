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

type TNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export const icons = {
  1: Icon1,
  2: Icon2,
  3: Icon3,
  4: Icon4,
  5: Icon5,
  6: Icon6,
  7: Icon7,
  8: Icon8,
  9: Icon9,
  10: Icon10,
  11: Icon11,
  12: Icon12,
  13: Icon13,
  14: Icon14,
  15: Icon15,
  16: Icon16,
  17: Icon17,
  18: Icon18,
  19: Icon19,
  20: Icon20,
};

const getIcon = (num: TNumber) => {
  return icons[num];
};

export default getIcon;
