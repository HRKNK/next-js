import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ILogo extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    naming: boolean;
}