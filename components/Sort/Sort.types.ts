import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ISort extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    sort: sortEnum;
    setSort: (sortType: sortEnum) => void
}

export type sortEnum = 'rating' | 'price';