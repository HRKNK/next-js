import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ISearch extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    target: string;
    button: boolean;
}