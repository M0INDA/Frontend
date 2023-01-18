import cls from "@utils/cls";
import React from "react";

interface ILabel {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  label?: string;
}

const Label = ({ children, className, label }: ILabel) => {
  return (
    <label
      className={cls(
        "flex flex-col text-[0.93rem] text-primary-500",
        className ? className : ""
      )}
    >
      {label && <span className="mb-[10px]">{label}</span>}
      {children}
    </label>
  );
};

export default Label;
