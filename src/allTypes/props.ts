import { Dispatch, SetStateAction } from "react";

export interface NowProps {
  now?: string;
}
export interface BtnProps {
  setClick: Dispatch<SetStateAction<string>>;
  click: string;
}
