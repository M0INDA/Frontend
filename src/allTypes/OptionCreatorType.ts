import { RegisterOptions } from "react-hook-form";

export type Option<T> = [keyof T, RegisterOptions];
export type SubOptionCreator<T> = (customOpts?: RegisterOptions) => Option<T>;
export type OptionCreator = <T>(option: Option<T>) => SubOptionCreator<T>;