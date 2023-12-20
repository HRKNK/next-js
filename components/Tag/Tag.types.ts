import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    filling: 'red' | 'lilac' | 'ghost' | 'green' | 'gray';
}