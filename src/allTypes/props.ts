import { Dispatch, SetStateAction } from "react";

export interface INowProps {
  now?: string;
}
export interface IBtnProps {
  setClick: Dispatch<SetStateAction<string>>;
  click: string;
}
