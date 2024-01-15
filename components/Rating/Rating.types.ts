import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface IRating extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable: boolean;
    currentRating: number;
    setRating: Dispatch<SetStateAction<number>>;
    setEditable: Dispatch<SetStateAction<boolean>>;
}