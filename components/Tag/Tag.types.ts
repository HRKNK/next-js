import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    color: 'red' | 'lilac' | 'ghost' | 'green' | 'gray';
    href?: string;
    size: 's' | 'm';
}