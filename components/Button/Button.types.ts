import { ReactNode } from "react";

export interface IButton {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}